const BinaryTree = require("../src/binary_tree");

let binaryTree = null;

/*------------------
Primary test case used:

      10
    /    \
   4     14
  / \    /  \
 2   6  12   16
-------------------*/

describe("Binary Tree", () => {
  beforeEach(() => {
    binaryTree = new BinaryTree(10);
  });
  describe("The getValues method", () => {
    test("should return an array of all values in depth first preorder", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      expect(binaryTree.getValues()).toEqual([10, 4, 2, 6, 14, 12, 16]);
    });
    test("should return a single value in an array if there is only a node", () => {
      expect(binaryTree.getValues()).toEqual([10]);
    });
    test("should return an array of all values if there is only nodes on the left - in depth first preorder", () => {
      binaryTree.add(14);
      binaryTree.add(16);
      expect(binaryTree.getValues()).toEqual([10, 14, 16]);
    });
  });
});
