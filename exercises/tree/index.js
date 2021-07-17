// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(child) {
        this.children.push(new Node(child));
    }
    remove(childToDel) {
        this.children = this.children.filter(child => child.data === childToDel)
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(fn) {
        let arr = [this.root];

        while(arr.length) {
            let element = arr.shift();
            arr.push(...element.children);
            fn(element);
        }
    }
    traverseDF(fn) {
        let arr = [this.root];
        
        while(arr.length) {
            let element = arr.shift();
            arr.unshift(...element.children);
            fn(element);
        }
    }
}

module.exports = { Tree, Node };
