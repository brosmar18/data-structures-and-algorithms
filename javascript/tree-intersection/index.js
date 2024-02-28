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

module.exports = { treeIntersection, TreeNode };