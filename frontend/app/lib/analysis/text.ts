import { loadSubtlexMap } from "./subtlexLoader";
import type { EssayAnalysis, HistogramBin, SentencePoint } from "./types";

function round(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function isHeadingLine(line: string): boolean {
  const trimmed = line.trim();

  if (!trimmed) return true;

  if (/^(by\s+[A-Z][A-Za-z.\-'\s]+)$/i.test(trimmed)) return true;
  if (/^(preface|introduction|contents)$/i.test(trimmed)) return true;
  if (/^chapter\s+[ivxlcdm]+\b.*$/i.test(trimmed)) return true;
  if (/^\d{4}$/.test(trimmed)) return true;

  if (
    trimmed.length <= 120 &&
    /[A-Z]/.test(trimmed) &&
    trimmed === trimmed.toUpperCase() &&
    !/[!?]$/.test(trimmed)
  ) {
    return true;
  }

  return false;
}


function isHeadingParagraph(paragraph: string): boolean {
  const trimmed = paragraph.trim();

  if (!trimmed) return true;

  if (/^(by\s+[A-Z][A-Za-z.\-'\s]+)$/i.test(trimmed)) return true;
  if (/^(preface|introduction|contents)$/i.test(trimmed)) return true;
  if (/^chapter\s+[ivxlcdm]+\b.*$/i.test(trimmed)) return true;
  if (/^\d{4}$/.test(trimmed)) return true;

  if (
    trimmed.length <= 120 &&
    /[A-Z]/.test(trimmed) &&
    trimmed === trimmed.toUpperCase() &&
    !/\.$/.test(trimmed)
  ) {
    return true;
  }

  return false;
}

function protectNonTerminalPeriods(text: string): string {
  return text
    // G. E. Moore / J. M. Keynes
    .replace(/\b([A-Z])\.(?=\s+[A-Z]\.)/g, "$1∯")
    .replace(/\b([A-Z])\.(?=\s+[A-Z][a-z])/g, "$1∯")

    // Common abbreviations
    .replace(/\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St|etc|vs)\.(?=\s)/g, "$1∯")
    .replace(/\b(e\.g|i\.e|cf)\.(?=\s)/gi, (m) => m.replace(/\./g, "∯"));
}

export function splitIntoSentences(text: string): string[] {
  const paragraphs = text
    .replace(/\r/g, "")
    .split(/\n\s*\n+/) 
    .map((paragraph) =>
      paragraph
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(Boolean)
    .filter((paragraph) => !isHeadingParagraph(paragraph));

  const sentences: string[] = [];

  for (const paragraph of paragraphs) {
    const protectedParagraph = protectNonTerminalPeriods(paragraph);

    const parts =
      protectedParagraph.match(/[^.]+(?:\.|$)/g)?.map((part) =>
        part.replace(/∯/g, ".").trim()
      ) ?? [];

    for (const part of parts) {
      if (part) {
        sentences.push(part);
      }
    }
  }

  return sentences;
}

export function tokenizeSentence(sentence: string): string[] {
  return sentence
    .toLowerCase()
    .match(/[a-z]+(?:'[a-z]+)?/g)
    ?.map((token) => token.trim())
    .filter(Boolean) ?? [];
}

function difficultyFromZipf(zipf: number | undefined): number {
  if (typeof zipf !== "number" || !Number.isFinite(zipf)) {
    return 7.5;
  }

  return round(Math.min(8, Math.max(1, 8 - zipf)));
}

export function buildHistogram(values: number[], binCount = 10): HistogramBin[] {
  if (!values.length) {
    return [];
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return [{ start: min, end: max, count: values.length }];
  }

  const width = (max - min) / binCount;
  const bins: HistogramBin[] = Array.from({ length: binCount }, (_, index) => ({
    start: min + width * index,
    end: index === binCount - 1 ? max : min + width * (index + 1),
    count: 0
  }));

  for (const value of values) {
    const rawIndex = Math.floor((value - min) / width);
    const safeIndex = Math.min(binCount - 1, Math.max(0, rawIndex));
    bins[safeIndex].count += 1;
  }

  return bins;
}

export async function analyzeEssay(text: string): Promise<EssayAnalysis> {
  const { map, dictionaryName, usedFallbackDictionary } = await loadSubtlexMap();
  const sentences = splitIntoSentences(text);

  const points: SentencePoint[] = sentences.map((sentence, index) => {
    const words = tokenizeSentence(sentence);
    const uniqueWordCount = new Set(words).size;

    const zipfScores = words.map((word) => map[word]);
    const knownScores = zipfScores.filter((score): score is number => typeof score === "number");
    const averageZipf =
      knownScores.length > 0
        ? knownScores.reduce((sum, score) => sum + score, 0) / knownScores.length
        : 0;

    const difficultyScores = words.map((word) => difficultyFromZipf(map[word]));
    const averageDifficulty =
      difficultyScores.length > 0
        ? difficultyScores.reduce((sum, score) => sum + score, 0) / difficultyScores.length
        : 0;

    const unknownWordCount = words.filter((word) => typeof map[word] !== "number").length;

    return {
      id: index + 1,
      sentence,
      words,
      uniqueWordCount,
      wordCount: words.length,
      averageDifficulty: round(averageDifficulty),
      averageZipf: round(averageZipf),
      unknownWordCount
    };
  });

  const wordCounts = points.map((point) => point.wordCount);
  const difficulties = points.map((point) => point.averageDifficulty);

  const totalWords = points.reduce((sum, point) => sum + point.wordCount, 0);
  const totalUnknownWords = points.reduce((sum, point) => sum + point.unknownWordCount, 0);

  return {
    sentences: points,
    xBins: buildHistogram(wordCounts, 10),
    yBins: buildHistogram(difficulties, 10),
    dictionaryName,
    usedFallbackDictionary,
    unknownRate: totalWords ? round((totalUnknownWords / totalWords) * 100) : 0,
    summary: {
      sentenceCount: points.length,
      totalWords,
      averageSentenceLength: points.length ? round(totalWords / points.length) : 0,
      averageSentenceDifficulty: points.length
        ? round(points.reduce((sum, point) => sum + point.averageDifficulty, 0) / points.length)
        : 0
    }
  };
}
