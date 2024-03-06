const leftJoin = require('../index');


describe('leftJoin function tests', () => {
  test('Successfully joins two hashmaps with matching and non-matching keys', () => {
    const synonyms = {
      diligent: "employed",
      fond: "enamored",
      guide: "usher",
      outfit: "garb",
      wrath: "anger"
    };
    const antonyms = {
      diligent: "idle",
      fond: "averse",
      guide: "follow",
      wrath: "delight"
    };
    const expected = [
      ["diligent", "employed", "idle"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
      ["outfit", "garb", null],
      ["wrath", "anger", "delight"]
    ];

    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('Returns correct output when the antonyms hashmap is empty', () => {
    const synonyms = { happy: "joyful" };
    const antonyms = {};
    const expected = [["happy", "joyful", null]];

    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });

  test('Handles cases with no matching keys between hashmaps', () => {
    const synonyms = { happy: "joyful" };
    const antonyms = { sad: "unhappy" };
    const expected = [["happy", "joyful", null]];

    expect(leftJoin(synonyms, antonyms)).toEqual(expected);
  });
});
