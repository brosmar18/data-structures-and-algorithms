# Tree Intersection

Write a function callecd `tree_intersection` that takes two binary trees and returns a set of values that are present in both trees.

## Whiteboard Process

![Tree Intersection Whiteboard](../assets);

## Approach & Efficiency

### Approach
The `tree_intersection` function utilizes a two-step approach to identify common values between two binary trees. First, it converts each tree into a set of values using the helper function `treeToSet`. This function traverses the tree in a depth-first manner and adds each node's value to a set, effectively extracting the tree's values into a flat data structure. Once both trees have been converted to sets, the function iterates through the first set and checks for the presence of each value in the second set. If a value is found in both sets, it is added to the `intersection` set. This process continues until all values from the first set have been checked against the second set.

### Efficiency 
The efficiency of this solution is governed by its time and space complexity:

- **Time Complexity**: O(n + m), where n is the number of nodes in `tree1` and m is the number of nodes in `tree2`. The time complexity arises from the need to traverse each tree once to convert them into sets, and the subsequent iteration over the first set's values to check for their presence in the second set. 

- **Space Complexity**: O(n), where n is the number of unique values in `tree1`. This space complexity is due to the storage requirements of the set created from `tree1`'s values. The space needed for the `intersection` set is not considered in the worst-case space complexity, as it will never exceed the size of the first set.


## Solution

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeToSet(root, set = new Set()) {
  if (!root) return set;
  set.add(root.value);
  treeToSet(root.left, set);
  treeToSet(root.right, set);
  return set;
}

function treeIntersection(tree1, tree2) {
  const set1 = treeToSet(tree1);
  const set2 = treeToSet(tree2);
  const intersection = new Set();

  for (let value of set1) {
    if (set2.has(value)) {
      intersection.add(value);
    }
  }

  return Array.from(intersection);
}
```
