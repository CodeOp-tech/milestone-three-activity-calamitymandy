/* ----------------------
Nota: ANTES de abordar la clase debajo, 
lee los tests del archivo correspondiente.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value <= this.value) {
      !this.left ? (this.left = new BinaryTree(value)) : this.left.add(value);
    } else {
      !this.right
        ? (this.right = new BinaryTree(value))
        : this.right.add(value);
    }
  }

  // devuelve un array con todos los valores del tree recorriendo en profundidad primero preorden (actual, izquierda, derecha)
  getValues() {
    let result = [];

    function traverse(node) {
      if (node) {
        result.push(node.value);
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      console.log(result);
    }

    traverse(this);
    return result;
  }
}

module.exports = BinaryTree;
