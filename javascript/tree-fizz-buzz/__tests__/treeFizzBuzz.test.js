const { Node, KaryTree } = require('../index');

describe('Node', () => {
  it('should create a node with a value', () => {
    const node = new Node(10);
    expect(node.value).toBe(10);
    expect(node.children).toEqual([]);
  });

  it('should create a node with a value and children', () => {
    const child1 = new Node(3);
    const child2 = new Node(5);
    const node = new Node(2, [child1, child2]);

    expect(node.value).toBe(2);
    expect(node.children).toEqual([child1, child2]);
  });
});

describe('KaryTree', () => {
  it('should create an empty KaryTree', () => {
    const tree = new KaryTree();
    expect(tree.root).toBeNull();
  });

  it('should create a KaryTree with a root node', () => {
    const rootNode = new Node(1);
    const tree = new KaryTree(rootNode);
    expect(tree.root).toBe(rootNode);
  });

  describe('fizzBuzzTree', () => {
    it('should return a KaryTree with a null root for an empty tree', () => {
      const tree = new KaryTree();
      const result = tree.fizzBuzzTree();
      expect(result).toBeInstanceOf(KaryTree);
      expect(result.root).toBeNull();
    });

    it('should correctly transform a single-node tree', () => {
      const tree = new KaryTree(new Node(15));
      const transformedTree = tree.fizzBuzzTree();
      expect(transformedTree.root.value).toBe('FizzBuzz');
    });

    it('should correctly transform a multi-node tree', () => {
      const tree = new KaryTree(new Node(15, [new Node(3), new Node(5), new Node(7)]));
      const transformedTree = tree.fizzBuzzTree();

      expect(transformedTree.root.value).toBe('FizzBuzz');
      expect(transformedTree.root.children[0].value).toBe('Fizz');
      expect(transformedTree.root.children[1].value).toBe('Buzz');
      expect(transformedTree.root.children[2].value).toBe('7');
    });
  });
});
