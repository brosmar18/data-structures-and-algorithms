const { treeIntersection, TreeNode } = require('../index');

function buildTreeFromArray(arr) {
  if (!arr.length) return null;
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  while (i < arr.length && queue.length) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

describe('treeIntersection', () => {
  test('finds common values in two binary trees', () => {
    const tree1Values = [150, 100, 250, 75, 160, 200, 350, 125, 175, 300, 500];
    const tree2Values = [42, 100, 600, 15, 160, 200, 350, 125, 175, 4, 500];
    const tree1 = buildTreeFromArray(tree1Values);
    const tree2 = buildTreeFromArray(tree2Values);
    expect(treeIntersection(tree1, tree2)).toEqual(expect.arrayContaining([100, 160, 125, 175, 200, 350, 500]));
  });

  test('returns an empty array when one tree is empty', () => {
    const tree1Values = [];
    const tree2Values = [42, 100, 600, 15, 160, 200, 350, 125, 175, 4, 500];
    const tree1 = buildTreeFromArray(tree1Values);
    const tree2 = buildTreeFromArray(tree2Values);
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  test('returns an empty array when both trees are empty', () => {
    const tree1 = buildTreeFromArray([]);
    const tree2 = buildTreeFromArray([]);
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  test('returns an empty array when there are no common values', () => {
    const tree1Values = [1, 2, 3];
    const tree2Values = [4, 5, 6];
    const tree1 = buildTreeFromArray(tree1Values);
    const tree2 = buildTreeFromArray(tree2Values);
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
