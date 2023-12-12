const { Node, BinaryTree } = require('../index');

describe('BinaryTree', () => {
  test('breadthFirst returns an empty array for an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.breadthFirst()).toEqual([]);
  });

  test('breadthFirst returns single value for a tree with one node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.breadthFirst()).toEqual([1]);
  });

  test('breadthFirst returns all values in breadth-first order', () => {

    const tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);

    const expectedOutput = [2, 7, 5, 2, 6, 9, 5, 11, 4];
    expect(tree.breadthFirst()).toEqual(expectedOutput);
  });

  test('breadthFirst correctly handles trees with missing children', () => {
    const tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.right = new Node(5);
    // Right child of the left node is missing
    tree.root.left.left = new Node(2);
    // Left child of the right node is missing
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);

    const expectedOutput = [2, 7, 5, 2, 9, 4];
    expect(tree.breadthFirst()).toEqual(expectedOutput);
  });
});
