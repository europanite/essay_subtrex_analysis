import {
  buildHistogram,
  splitIntoSentences,
  tokenizeSentence
} from "../lib/analysis/text";

test("splits on true sentence-ending periods and question marks", () => {
  expect(splitIntoSentences("One. Two? Three!")).toEqual(["One.", "Two?", "Three!"]);
});

test("does not split on single line breaks inside a paragraph", () => {
  const text = [
    "In the following pages I have confined myself in the main",
    "to those problems of philosophy in regard to which I thought",
    "it possible to say something positive and constructive."
  ].join("\n");

  expect(splitIntoSentences(text)).toEqual([
    "In the following pages I have confined myself in the main to those problems of philosophy in regard to which I thought it possible to say something positive and constructive."
  ]);
});

test("treats blank lines as hard boundaries", () => {
  const text = ["One without a period", "", "Two without a period"].join("\n");

  expect(splitIntoSentences(text)).toEqual([
    "One without a period",
    "Two without a period"
  ]);
});

test("does not split on initials", () => {
  expect(
    splitIntoSentences(
      "I received help from G. E. Moore and J. M. Keynes. Their comments were useful."
    )
  ).toEqual([
    "I received help from G. E. Moore and J. M. Keynes.",
    "Their comments were useful."
  ]);
});

test("does not split on titles and common abbreviations", () => {
  expect(
    splitIntoSentences(
      "Dr. Smith revised the draft. The paper includes tables, etc. and notes."
    )
  ).toEqual([
    "Dr. Smith revised the draft.",
    "The paper includes tables, etc. and notes."
  ]);
});

test("does not split on acronyms and decimals", () => {
  expect(
    splitIntoSentences(
      "The U.S. Navy adopted the rule. The value rose from 3.14 to 6.28."
    )
  ).toEqual([
    "The U.S. Navy adopted the rule.",
    "The value rose from 3.14 to 6.28."
  ]);
});

test("tokenizes contractions", () => {
  expect(tokenizeSentence("It's a small test.")).toEqual([
    "it's",
    "a",
    "small",
    "test"
  ]);
});

test("builds histogram bins", () => {
  const bins = buildHistogram([1, 2, 3, 4, 5], 2);

  expect(bins).toHaveLength(2);
  expect(bins[0].count + bins[1].count).toBe(5);
});

test("builds a single bin when all values are identical", () => {
  const bins = buildHistogram([4, 4, 4], 5);

  expect(bins).toEqual([
    {
      start: 4,
      end: 4,
      count: 3,
      label: "4"
    }
  ]);
});