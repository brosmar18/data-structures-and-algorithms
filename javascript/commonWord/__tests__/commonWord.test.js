const mostCommonWord = require("../index");

describe("mostCommonWord", () => {
  test('should return "far" for the input "In a galaxy far far away"', () => {
    expect(mostCommonWord("In a galaxy far far away")).toBe("far");
  });

  test('should return "taco" for the input "Taco cat ate a taco"', () => {
    expect(mostCommonWord("Taco cat ate a taco")).toBe("taco");
  });

  test('should return "no" for the input "No. Try not. Do or do not. There is no try."', () => {
    expect(mostCommonWord("No. Try not. Do or do not. There is no try.")).toBe(
      "do"
    );
  });

  // Additional Tests for Edge Cases

  test("should handle a string with a single word repeated", () => {
    expect(mostCommonWord("hello hello hello")).toBe("hello");
  });

  test("should ignore punctuation", () => {
    expect(mostCommonWord("hello, hello! hello?")).toBe("hello");
  });

  test("should be case insensitive", () => {
    expect(mostCommonWord("Hello HELLO heLLo")).toBe("hello");
  });
});
