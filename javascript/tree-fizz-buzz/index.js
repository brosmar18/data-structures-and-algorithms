class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}


class KaryTree {
  constructor(root = null) {
    this.root = root;
  }

  fizzBuzzTree() {
    const transformNode = (node) => {
      if (!node) return null;

      let value;
      if (node.value % 15 === 0) value = 'FizzBuzz';
      else if (node.value % 3 === 0) value = 'Fizz';
      else if (node.value % 5 === 0) value = 'Buzz';
      else value = node.value.toString();

      let newNode = new Node(value);
      newNode.children = node.children.map(transformNode);
      return newNode;
    };

    return new KaryTree(transformNode(this.root));
  }
}


module.exports = { Node, KaryTree };
