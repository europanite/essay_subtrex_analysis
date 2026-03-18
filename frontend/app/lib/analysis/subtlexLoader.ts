import { FALLBACK_SUBTLEX_MAP } from "./subtlexFallback";
import type { DictionaryLoadResult } from "./types";

let cache: DictionaryLoadResult | null = null;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function scoreFromRawNumber(raw: number): number {
  if (!Number.isFinite(raw)) {
    return 0;
  }

  if (raw >= 0 && raw <= 8) {
    return raw;
  }

  if (raw > 8) {
    return clamp(Math.log10(raw + 1), 0, 8);
  }

  return 0;
}

function readCandidateValue(item: unknown): number | null {
  if (typeof item === "number") {
    return scoreFromRawNumber(item);
  }

  if (!item || typeof item !== "object") {
    return null;
  }

  const row = item as Record<string, unknown>;
  const candidates = [
    row.zipf,
    row.Zipf,
    row.lg10WF,
    row.log10WF,
    row.log10wf,
    row.frequency,
    row.freq,
    row.fpm,
    row.count,
    row.value
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "number") {
      return scoreFromRawNumber(candidate);
    }
  }

  return null;
}

function readCandidateWord(item: unknown): string | null {
  if (!item || typeof item !== "object") {
    return null;
  }

  const row = item as Record<string, unknown>;
  const candidates = [row.word, row.token, row.lemma, row.text, row.key];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim().toLowerCase();
    }
  }

  return null;
}

function normalizeModule(rawModule: unknown): Record<string, number> | null {
  const raw =
    rawModule &&
    typeof rawModule === "object" &&
    "default" in (rawModule as Record<string, unknown>)
      ? (rawModule as Record<string, unknown>).default
      : rawModule;

  if (!raw) {
    return null;
  }

  if (Array.isArray(raw)) {
    const map: Record<string, number> = {};
    for (const item of raw) {
      const word = readCandidateWord(item);
      const value = readCandidateValue(item);
      if (word && value !== null) {
        map[word] = value;
      }
    }
    return Object.keys(map).length ? map : null;
  }

  if (typeof raw === "object") {
    const source = raw as Record<string, unknown>;
    const map: Record<string, number> = {};

    for (const [key, value] of Object.entries(source)) {
      if (typeof key === "string") {
        const normalizedKey = key.trim().toLowerCase();
        const score = readCandidateValue(value);
        if (normalizedKey && score !== null) {
          map[normalizedKey] = score;
          continue;
        }

        if (typeof value === "number") {
          map[normalizedKey] = scoreFromRawNumber(value);
        }
      }
    }

    return Object.keys(map).length ? map : null;
  }

  return null;
}

export async function loadSubtlexMap(): Promise<DictionaryLoadResult> {
  if (cache) {
    return cache;
  }

  try {
    const mod = await import("subtlex-word-frequencies");
    const map = normalizeModule(mod);

    if (map && Object.keys(map).length > 0) {
      cache = {
        map,
        dictionaryName: "subtlex-word-frequencies",
        usedFallbackDictionary: false
      };
      return cache;
    }
  } catch (error) {
    // Fallback is intentional. The UI remains usable without crashing.
  }

  cache = {
    map: FALLBACK_SUBTLEX_MAP,
    dictionaryName: "Fallback SUBTLEX starter dictionary",
    usedFallbackDictionary: true
  };
  return cache;
}
