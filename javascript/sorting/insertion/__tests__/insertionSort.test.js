const insertionSort = require('../index');

describe('Insertion Sort', () => {
  test('sorts a reverse-sorted array', () => {
    expect(insertionSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('sorts an array with few unique elements', () => {
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('sorts a nearly-sorted array', () => {
    expect(insertionSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  });

  test('sorts a mixed number array', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('sorts an array with duplicates', () => {
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('sorts another nearly-sorted array', () => {
    expect(insertionSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  });

  test('handles an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });
});
