const uniqueCharacters = require('../index');

describe('uniqueCharacters function', () => {
  test('returns false for "Santa has a brand new bag" ', () => {
    expect(uniqueCharacters('Santa has a brand new bag')).toBe(false);
  });

  test('returns true for "Frog jump"', () => {
    expect(uniqueCharacters('Frog jump')).toBe(true);
  });

  test('returns false for "Fly at night"', () => {
    expect(uniqueCharacters('Fly at night')).toBe(false);
  });

  test('returns true for "cat dog"', () => {
    expect(uniqueCharacters('cat dog')).toBe(true);
  });

  // Additional edge case tests
  test('returns true for an empty string', () => {
    expect(uniqueCharacters('')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(uniqueCharacters('x')).toBe(true);
  });

  test('returns false for string with all identical characters', () => {
    expect(uniqueCharacters('aaaa')).toBe(false);
  });

  test('returns true for string with mixed case sensitivity', () => {
    expect(uniqueCharacters('AbCdEf')).toBe(true);
  });
});
