import { buildHistogram, splitIntoSentences, tokenizeSentence } from "../lib/analysis/text";

test("splits essay into sentences", () => {
  expect(splitIntoSentences("One. Two? Three!")).toEqual(["One.", "Two?", "Three!"]);
});

test("tokenizes contractions", () => {
  expect(tokenizeSentence("It's a small test.")).toEqual(["it's", "a", "small", "test"]);
});

test("builds histogram bins", () => {
  const bins = buildHistogram([1, 2, 3, 4, 5], 2);
  expect(bins).toHaveLength(2);
  expect(bins[0].count + bins[1].count).toBe(5);
});
