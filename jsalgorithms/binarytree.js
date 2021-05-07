

// defining the class Node

class Node {
    constructor (cargo = undefined, _id = undefined, parent = undefined, left = undefined, right = undefined) {
        this.cargo = cargo;
        this._id = _id;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
    getCargo () { return this.cargo; }
    getId () { return this._id; }
    getParent () { return this.parent; }
    getLeft () { return this.left; }
    getRight () { return this.right; }

    setCargo (cargo = undefined) { this.cargo = cargo; }
    setId (_id = undefined) { this._id = _id; }
    setParent (parent = undefined) { this.parent = parent; }
    setLeft (left = undefined) { this.left = left; }
    setRight (right = undefined) { this.right = right; }
}


// defining the class BinaryTree

class BinaryTree {
    constructor () {
        this._id = 0;
        this.root = undefined;
    }

    insertLeftNode (root = undefined, cargo = undefined) {
        if (!cargo) {
            return undefined;
        }
        let node = new Node (cargo, this._id, root, undefined, undefined);
        if (!root) { root = node; }
        else {
            root.setLeft (node);
        }
        this._id++;
        return root;
    }

    insertRightNode (root = undefined, cargo = undefined) {
        if (!cargo) {
            return undefined;
        }
        let node = new Node (cargo, this._id, root, undefined, undefined);
        if (!root) { root = node; }
        else {
            root.setRight (node);
        }
        this._id++;
        return root;
    }

    displayBinaryTree (root = undefined) {
        if (!root) { return undefined; }
        console.log (root.getCargo ());
        this.displayBinaryTree (root.getLeft ());
        this.displayBinaryTree (root.getRight ());
    }

    getNode (root = undefined, _id = undefined) {
        if (!root || !_id) { return undefined; }
        else {
            if (root.getId () === _id) {
                return root;
            } else {
                let lr = this.getNode (root.getLeft (), _id);
                if (lr) { return lr; }
                let rl = this.getNode (root.getRight (), _id);
                if (rl) { return rl; }
            }
        }
    }

    getRootNode () {
        return this.root;
    }

    setRootNode (root = undefined) {
        this.root = root;
    }
}

let main = () => {
    let tree = new BinaryTree ();
    tree.setRootNode (tree.insertLeftNode (tree.getRootNode (), 2));
    tree.setRootNode (tree.insertLeftNode (tree.getRootNode (), 3));
    tree.setRootNode (tree.insertRightNode (tree.getRootNode (), 4));
    tree.displayBinaryTree (tree.getRootNode ());

    // getting the node with the id '1'
    let node = tree.getNode (tree.getRootNode (), 1);
    console.log (node);

    // inserting childs of node with the id of 1
    tree.insertLeftNode (node, 5);
    tree.insertRightNode (node, 6);

    // displaying the tree
    tree.displayBinaryTree (tree.getRootNode ());

    // getting node with the id of '3'

    let mynode = tree.getNode (tree.getRootNode (), 3);
    console.log (mynode);
}

main ()