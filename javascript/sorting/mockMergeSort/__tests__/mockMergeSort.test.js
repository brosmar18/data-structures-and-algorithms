const mergeSort = require('../index');

test('sorts an array of integers', () => {
  expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
});

test('sorts an array of integers with negative numbers', () => {
  expect(mergeSort([10, -1, 2, 5, 0, 6, 4, -5])).toEqual([-5, -1, 0, 2, 4, 5, 6, 10]);
});

test('returns an empty array when given one', () => {
  expect(mergeSort([])).toEqual([]);
});

test('handles an array with a single element', () => {
  expect(mergeSort([1])).toEqual([1]);
});
