export type SentencePoint = {
  id: number;
  sentence: string;
  words: string[];
  uniqueWordCount: number;
  wordCount: number;
  averageDifficulty: number;
  averageZipf: number;
  unknownWordCount: number;
};

export type HistogramBin = {
  start: number;
  end: number;
  count: number;
};

export type DifficultyExample = {
  start: number;
  end: number;
  rangeLabel: string;
  words: string[];
};

export type WordDiagnostic = {
  word: string;
  rawScore: number | null;
  normalizedScore: number | null;
  difficulty: number | null;
  occurrencesInEssay: number;
};

export type EssayAnalysis = {
  sentences: SentencePoint[];
  xBins: HistogramBin[];
  yBins: HistogramBin[];
  difficultyExamples: DifficultyExample[];
  wordDiagnostics: WordDiagnostic[];
  dictionaryName: string;
  usedFallbackDictionary: boolean;
  unknownRate: number;
  summary: {
    sentenceCount: number;
    totalWords: number;
    averageSentenceLength: number;
    averageSentenceDifficulty: number;
  };
};

export type DictionaryLoadResult = {
  map: Record<string, number>;
  rawMap: Record<string, number>;
  dictionaryName: string;
  usedFallbackDictionary: boolean;
};
