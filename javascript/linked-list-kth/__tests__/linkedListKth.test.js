const { LinkedList } = require('../index');

describe('LinkedList KthFromEnd method', () => {
    let ll;
  
    beforeEach(() => {
      ll = new LinkedList();
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);
    });
  
    test('k = 0 should return last node value', () => {
      expect(ll.KthFrontEnd(0)).toBe(2);
    });
  
    test('k = 2 should return value 3', () => {
      expect(ll.KthFrontEnd(2)).toBe(3);
    });
  
    test('k = 6 should throw an exception', () => {
      expect(() => ll.KthFrontEnd(6)).toThrow('Exception: The list does not contain 7 nodes.');
    });
  
    test('k equal to the length of the list should throw an exception', () => {
      expect(() => ll.KthFrontEnd(4)).toThrow('Exception: The list does not contain 5 nodes.');
    });
  
    test('k not a positive integer should throw an exception', () => {
      expect(() => ll.KthFrontEnd(-1)).toThrow('Exception: k must be a non-negative integer.');
    });
  
    test('LinkedList of size 1, k = 0 should return the node value', () => {
      const singleItemList = new LinkedList();
      singleItemList.append(5);
      expect(singleItemList.KthFrontEnd(0)).toBe(5);
    });
  
    test('k not at the end of the list but somewhere in the middle should return correct node value', () => {
      expect(ll.KthFrontEnd(1)).toBe(8);
    });
  });