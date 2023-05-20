function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  if (root.left === null && root.right === null) return root;
  const leftInverted: TreeNode | null = invertTree(root.left);
  const rightInverted: TreeNode | null = invertTree(root.right);
  root.left = rightInverted;
  root.right = leftInverted;
  return root;
}
