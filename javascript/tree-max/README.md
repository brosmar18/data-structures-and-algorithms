# Tree Max

The problem involves finding the maximum numeric value stored within a binary tree. 

## Whiteboard Process
![Tree Max](../assets/treeMaxWhiteboard.png);

## Approach & Efficiency

The approach taken to solve the "Tree Max" challenge involves the implementation of a binary tree data structure, along with a method to find the maximum value stored in the tree. The solution is built around a `BinaryTree` class, which encapsulates the logic for inserting nodes and finding the maximum value. 

The `findMaximumValue` method is the core of the solution, designed to traverse the binary tree and compare values to find the maximum. This is achieved through a recursive function `_findMax` that checks each node in the tree, comparing the current node's value with the maximum values found in its left and right subtrees.

### Efficiency

- **Time Complexity**: The time complexity of the `findMaximumValue` method is O(n), where n is the number of nodes in the binary tree. 

- **Space Complexity**: The space complexity is O(h), where h is the height of the tree. 

This approach efficiently handles the problem of finding the maximum value in a binary tree, ensuring that all nodes are checked in a single pass through the tree.




## Solution

```js
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
```