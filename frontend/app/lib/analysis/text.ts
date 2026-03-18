export type HistogramBin = {
  start: number;
  end: number;
  count: number;
  label: string;
};

const PROTECTED_PERIOD = "\uE000";

function protectAcronymPeriods(text: string): string {
  return text.replace(/\b(?:[A-Z]\.){2,}(?=\s+[A-Za-z])/g, (match) =>
    match.replace(/\./g, PROTECTED_PERIOD)
  );
}

function protectSingleInitials(text: string): string {
  return text
    // G. E. Moore
    .replace(/\b([A-Z])\.(?=\s+[A-Z]\.)/g, `$1${PROTECTED_PERIOD}`)
    // G. Moore
    .replace(/\b([A-Z])\.(?=\s+[A-Z][a-z])/g, `$1${PROTECTED_PERIOD}`);
}

function protectCommonAbbreviations(text: string): string {
  return text
    // Dr. Smith / Mr. Brown / Prof. Jones
    .replace(
      /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St)\.(?=\s+[A-Z])/g,
      `$1${PROTECTED_PERIOD}`
    )
    // etc. / vs. / cf. / fig. / eq. / no. / al. / inc. / ltd.
    .replace(
      /\b(etc|vs|cf|fig|eq|no|al|inc|ltd)\.(?=\s+[A-Za-z])/gi,
      (_match, p1: string) => `${p1}${PROTECTED_PERIOD}`
    )
    // e.g. / i.e.
    .replace(/\be\.g\./gi, `e${PROTECTED_PERIOD}g${PROTECTED_PERIOD}`)
    .replace(/\bi\.e\./gi, `i${PROTECTED_PERIOD}e${PROTECTED_PERIOD}`)
    // Ph.D. / M.A. / B.Sc. などの degree-ish なもの
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
      protectedParagraph.match(/[^.]+(?:\.|$)/g)?.map((part) => part.trim()) ??
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
  return sentence
    .toLowerCase()
    .replace(/[“”‘’]/g, "'")
    .match(/[a-z]+(?:'[a-z]+)?/g) ?? [];
}

export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function buildHistogram(
  values: number[],
  binCount = 10
): HistogramBin[] {
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

  const bins: HistogramBin[] = Array.from({ length: binCount }, (_, index) => {
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