const findRepeatedWord = require('../index');

describe('findRepeatedWord function', () => {
  test('finds the first repeated word in a string with multiple repeated words', () => {
    const input = "Once upon a time, there was a brave princess who...";
    expect(findRepeatedWord(input)).toBe('a');
  });

  test('finds the first repeated word in a long complex string', () => {
    const input = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...";
    expect(findRepeatedWord(input)).toBe('it');
  });

  test('finds the first repeated word when it is the name of a season', () => {
    const input = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
    expect(findRepeatedWord(input)).toBe('summer');
  });

  test('returns null when there are no repeated words', () => {
    const input = "Every good boy does fine.";
    expect(findRepeatedWord(input)).toBeNull();
  });
});
