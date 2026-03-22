import { loadSubtlexMap } from "./subtlexLoader";
import type {
  DifficultyExample,
  EssayAnalysis,
  HistogramBin,
  SentencePoint,
  WordDiagnostic
} from "./types";

export type HistogramBinWithLabel = HistogramBin & {
  label?: string;
};

const FIXED_BIN_COUNT = 8;

const PROTECTED_PERIOD = "\uE000";

function round(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function protectAcronymPeriods(text: string): string {
  return text.replace(/\b(?:[A-Z]\.){2,}(?=\s+[A-Za-z])/g, (match) =>
    match.replace(/\./g, PROTECTED_PERIOD)
  );
}

function protectSingleInitials(text: string): string {
  return text
    .replace(/\b([A-Z])\.(?=\s+[A-Z]\.)/g, `$1${PROTECTED_PERIOD}`)
    .replace(/\b([A-Z])\.(?=\s+[A-Z][a-z])/g, `$1${PROTECTED_PERIOD}`);
}

function protectCommonAbbreviations(text: string): string {
  return text
    .replace(
      /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St)\.(?=\s+[A-Z])/g,
      `$1${PROTECTED_PERIOD}`
    )
    .replace(
      /\b(etc|vs|cf|fig|eq|no|al|inc|ltd)\.(?=\s+[A-Za-z])/gi,
      (_match, p1: string) => `${p1}${PROTECTED_PERIOD}`
    )
    .replace(/\be\.g\./gi, `e${PROTECTED_PERIOD}g${PROTECTED_PERIOD}`)
    .replace(/\bi\.e\./gi, `i${PROTECTED_PERIOD}e${PROTECTED_PERIOD}`)
    .replace(/\b(?:[A-Za-z]{1,4}\.){2,}(?=\s+[A-Za-z])/g, (match) =>
      match.replace(/\./g, PROTECTED_PERIOD)
    );
}

function protectDecimalPeriods(text: string): string {
  return text.replace(/(\d)\.(\d)/g, `$1${PROTECTED_PERIOD}$2`);
}

function protectEllipses(text: string): string {
  return text.replace(/\.{3,}/g, (match) =>
    match.replace(/\./g, PROTECTED_PERIOD)
  );
}

function protectNonTerminalPeriods(text: string): string {
  return [
    protectEllipses,
    protectDecimalPeriods,
    protectAcronymPeriods,
    protectSingleInitials,
    protectCommonAbbreviations
  ].reduce((acc, fn) => fn(acc), text);
}

function restoreProtectedPeriods(text: string): string {
  return text.replace(new RegExp(PROTECTED_PERIOD, "g"), ".");
}

function normalizeParagraph(paragraph: string): string {
  return paragraph
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function splitIntoSentences(text: string): string[] {
  const paragraphs = text
    .replace(/\r/g, "")
    .split(/\n\s*\n+/)
    .map(normalizeParagraph)
    .filter(Boolean);

  const sentences: string[] = [];

  for (const paragraph of paragraphs) {
    const protectedParagraph = protectNonTerminalPeriods(paragraph);
    const parts =
      protectedParagraph.match(/[^.?]+(?:[.?]|$)/g)?.map((part) => part.trim()) ??
      [];

    for (const part of parts) {
      const restored = restoreProtectedPeriods(part).trim();
      if (restored) {
        sentences.push(restored);
      }
    }
  }

  return sentences;
}

export function tokenizeSentence(sentence: string): string[] {
  return (
    sentence
      .toLowerCase()
      .replace(/[“”‘’]/g, "'")
      .match(/[a-z]+(?:'[a-z]+)?/g) ?? []
  );
}

export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function difficultyFromZipf(zipf: number | undefined): number {
  if (typeof zipf !== "number" || !Number.isFinite(zipf)) {
    return 7.5;
  }

  return round(Math.min(8, Math.max(1, 8 - zipf)));
}


const DEFAULT_DIAGNOSTIC_WORDS = [
  "the",
  "truth",
  "knowledge",
  "inferred",
  "hitherto",
  "denotes",
  "hylas",
  "warranties",
  "affirmed"
];

export function buildWordDiagnostics(
  points: SentencePoint[],
  map: Record<string, number>,
  rawMap: Record<string, number>,
  targetWords: string[] = DEFAULT_DIAGNOSTIC_WORDS
): WordDiagnostic[] {
  const counts = new Map<string, number>();

  for (const point of points) {
    for (const word of point.words) {
      counts.set(word, (counts.get(word) ?? 0) + 1);
    }
  }

  return targetWords.map((word) => {
    const normalizedScore = typeof map[word] === "number" ? round(map[word], 3) : null;
    const rawScore = typeof rawMap[word] === "number" ? rawMap[word] : null;
    const difficulty = normalizedScore !== null ? difficultyFromZipf(normalizedScore) : null;

    return {
      word,
      rawScore,
      normalizedScore,
      difficulty,
      occurrencesInEssay: counts.get(word) ?? 0
    };
  });
}

export function buildHistogram(
  values: number[],
  binCount = 10
): HistogramBinWithLabel[] {
  if (values.length === 0 || binCount <= 0) {
    return [];
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return [
      {
        start: min,
        end: max,
        count: values.length,
        label: `${min}`
      }
    ];
  }

  const width = (max - min) / binCount;

  const bins: HistogramBinWithLabel[] = Array.from({ length: binCount }, (_, index) => {
    const start = min + index * width;
    const end = index === binCount - 1 ? max : start + width;

    return {
      start,
      end,
      count: 0,
      label: `${start.toFixed(1)}–${end.toFixed(1)}`
    };
  });

  for (const value of values) {
    const rawIndex = Math.floor((value - min) / width);
    const index = Math.min(Math.max(rawIndex, 0), binCount - 1);
    bins[index].count += 1;
  }

  return bins;
}



function formatDifficultyRange(start: number, end: number): string {
  if (start === end) {
    return `${start.toFixed(1)}`;
  }
  return `${start.toFixed(1)}–${end.toFixed(1)}`;
}

function wordFitsBin(
  difficulty: number,
  bin: HistogramBinWithLabel,
  isLastBin: boolean
): boolean {
  if (isLastBin) {
    return difficulty >= bin.start && difficulty <= bin.end;
  }
  return difficulty >= bin.start && difficulty < bin.end;
}

function buildDifficultyExamples(
  points: SentencePoint[],
  map: Record<string, number>,
  binCount = 10
): DifficultyExample[] {
  const ranked = new Map<string, { count: number; difficulty: number }>();

  for (const point of points) {
    for (const word of point.words) {
      if (word.length < 3) {
        continue;
      }

      const difficulty = difficultyFromZipf(map[word]);
      const existing = ranked.get(word);

      if (existing) {
        existing.count += 1;
        continue;
      }

      ranked.set(word, {
        count: 1,
        difficulty
      });
    }
  }

  const entries = Array.from(ranked.entries()).map(([word, info]) => ({
    word,
    count: info.count,
    difficulty: info.difficulty
  }));

  if (entries.length === 0) {
    return [];
  }

  const wordBins = buildHistogram(
    entries.map((entry) => entry.difficulty),
    binCount
  );

  return wordBins.map((bin, index) => {
    const isLastBin = index === wordBins.length - 1;
    const midpoint = (bin.start + bin.end) / 2;

    const words = entries
      .filter((entry) => wordFitsBin(entry.difficulty, bin, isLastBin))
      .sort((a, b) => {
        if (b.count !== a.count) {
          return b.count - a.count;
        }
        const distanceA = Math.abs(a.difficulty - midpoint);
        const distanceB = Math.abs(b.difficulty - midpoint);
        if (distanceA !== distanceB) {
          return distanceA - distanceB;
        }
        return a.word.localeCompare(b.word);
      })
      .slice(0, 6)
      .map((entry) => entry.word);

    return {
      start: bin.start,
      end: bin.end,
      rangeLabel: formatDifficultyRange(bin.start, bin.end),
      words
    };
  });
}

export async function analyzeEssay(text: string): Promise<EssayAnalysis> {
  const { map, rawMap, dictionaryName, usedFallbackDictionary } = await loadSubtlexMap();
  const sentences = splitIntoSentences(text);

  const points: SentencePoint[] = sentences.map((sentence, index) => {
    const words = tokenizeSentence(sentence);
    const uniqueWordCount = new Set(words).size;

    const zipfScores = words.map((word) => map[word]);
    const knownScores = zipfScores.filter(
      (score): score is number => typeof score === "number"
    );

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
  const xBins = buildHistogram(wordCounts, FIXED_BIN_COUNT);
  const yBins = buildHistogram(difficulties, FIXED_BIN_COUNT);
  const difficultyExamples = buildDifficultyExamples(points, map, FIXED_BIN_COUNT);
  const wordDiagnostics = buildWordDiagnostics(points, map, rawMap);

  const totalWords = points.reduce((sum, point) => sum + point.wordCount, 0);
  const totalUnknownWords = points.reduce((sum, point) => sum + point.unknownWordCount, 0);

  return {
    sentences: points,
    xBins,
    yBins,
    difficultyExamples,
    wordDiagnostics,
    dictionaryName,
    usedFallbackDictionary,
    unknownRate: totalWords ? round((totalUnknownWords / totalWords) * 100) : 0,
    summary: {
      sentenceCount: points.length,
      totalWords,
      averageSentenceLength: points.length ? round(totalWords / points.length) : 0,
      averageSentenceDifficulty: points.length
        ? round(
            points.reduce((sum, point) => sum + point.averageDifficulty, 0) / points.length
          )
        : 0
    }
  };
}