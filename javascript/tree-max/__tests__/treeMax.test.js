const { BinaryTree } = require('../index');

describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  test('should create an empty tree', () => {
    expect(binaryTree.root).toBeNull();
  });

  test('should insert values correctly', () => {
    binaryTree.insert(5);
    expect(binaryTree.root.value).toBe(5);

    binaryTree.insert(3);
    expect(binaryTree.root.left.value).toBe(3);

    binaryTree.insert(7);
    expect(binaryTree.root.right.value).toBe(7);
  });

  test('should find the maximum value in a tree', () => {
    binaryTree.insert(2);
    binaryTree.insert(7);
    binaryTree.insert(5);
    binaryTree.insert(3);
    binaryTree.insert(6);
    binaryTree.insert(9);
    binaryTree.insert(4);

    const max = binaryTree.findMaximumValue();
    expect(max).toBe(9);
  });

  test('should return null for maximum value in an empty tree', () => {
    const max = binaryTree.findMaximumValue();
    expect(max).toBeNull();
  });

  test('should find the maximum value in the left subtree', () => {
    binaryTree.insert(3);
    binaryTree.insert(2);
    binaryTree.insert(5);
    binaryTree.insert(4);
    binaryTree.insert(6);

    const max = binaryTree.findMaximumValue();
    expect(max).toBe(6);
  });

});
