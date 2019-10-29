const { longestWord } = require("./index.js");

describe("Longest Word In a String Function", () => {
  test("It should return 0 for empty string", () => {
    expect(longestWord("")).toBe(0);
  });

  test("It should return 0 for undefined", () => {
    expect(longestWord(undefined)).toBe(0);
  });

  test("It should return 6 for 'The quick brown fox jumped over the lazy dog", () => {
    expect(longestWord("The quick brown fox jumped over the lazy dog")).toBe(6);
  });

  test("It should return 7 for 'Toronto'", () => {
    expect(longestWord("Toronto")).toBe(7);
  });

  test("It should return false for 'All that we are is the result of what we have thought'", () => {
    expect(longestWord("All that we are is the result of what we have thought")).toBe(7);
  });

  test("It should return true for 'It always seems impossible until it’s done'", () => {
    expect(longestWord("It always seems impossible until it’s done")).toBe(10);
  });
});
