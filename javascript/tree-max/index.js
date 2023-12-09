class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  findMaximumValue() {
    return this._findMax(this.root);
  }

  _findMax(node) {
    if (node === null) {
      return null;
    }

    let maxVal = node.value;

    if (node.left !== null) {
      const leftMax = this._findMax(node.left);
      if (leftMax !== null && leftMax > maxVal) {
        maxVal = leftMax;
      }
    }

    if (node.right !== null) {
      const rightMax = this._findMax(node.right);
      if (rightMax !== null && rightMax > maxVal) {
        maxVal = rightMax;
      }
    }

    return maxVal;
  }
}


module.exports = { Node, BinaryTree };
