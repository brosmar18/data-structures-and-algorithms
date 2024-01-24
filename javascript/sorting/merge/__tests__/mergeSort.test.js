const mergeSort = require('../index');

describe('Merge Sort', () => {
  test('sorts a reverse-sorted array', () => {
    let array = [20, 18, 12, 8, 5, -2];
    mergeSort(array);
    expect(array).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('sorts an array with few unique elements', () => {
    let array = [5, 12, 7, 5, 5, 7];
    mergeSort(array);
    expect(array).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('sorts a nearly-sorted array', () => {
    let array = [2, 3, 5, 7, 13, 11];
    mergeSort(array);
    expect(array).toEqual([2, 3, 5, 7, 11, 13]);
  });

  test('sorts a mixed number array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    mergeSort(array);
    expect(array).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('handles an empty array', () => {
    let array = [];
    mergeSort(array);
    expect(array).toEqual([]);
  });
});
