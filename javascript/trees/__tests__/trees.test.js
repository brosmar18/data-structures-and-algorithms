const { BinaryTree, BinarySearchTree, Node } = require('../index');

describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.root.value).toEqual(1);
  });

  describe('Binary Search Tree', () => {
    it('Can successfully add a left child and right child to a node', () => {
      const bst = new BinarySearchTree();
      bst.add(2);
      bst.add(1);
      bst.add(3);
      expect(bst.root.value).toEqual(2);
      expect(bst.root.left.value).toEqual(1);
      expect(bst.root.right.value).toEqual(3);
    });
  });

  describe('Traversals', () => {
    let tree;
    beforeEach(() => {
      tree = new BinaryTree();
      tree.root = new Node(1);
      tree.root.left = new Node(2);
      tree.root.right = new Node(3);
      tree.root.left.left = new Node(4);
      tree.root.left.right = new Node(5);
    });

    it('Can successfully return a collection from a pre-order traversal', () => {
      expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3]);
    });

    it('Can successfully return a collection from an in-order traversal', () => {
      expect(tree.inOrder()).toEqual([4, 2, 5, 1, 3]);
    });

    it('Can successfully return a collection from a post-order traversal', () => {
      expect(tree.postOrder()).toEqual([4, 5, 2, 3, 1]);
    });
  });

  describe('Contains Method', () => {
    let bst;
    beforeEach(() => {
      bst = new BinarySearchTree();
      bst.add(5);
      bst.add(3);
      bst.add(7);
    });

    it('Returns true for an existing node value', () => {
      expect(bst.contains(7)).toBeTruthy();
    });

    it('Returns false for a non-existing node value', () => {
      expect(bst.contains(10)).toBeFalsy();
    });
  });
});
