

// Properties of Binary tree
/*
    1) The maximum number of nodes at level ‘l’ of a binary tree is 2 (to the power of l). 
    2) The Maximum number of nodes in a binary tree of height ‘h’ is 2 (to the power of h) – 1. 
    3) In a Binary Tree with N nodes, minimum possible height or the minimum number of levels is? Log2(N+1) ?  
    4) In Binary tree where every node has 0 or 2 children, the number of leaf nodes is always one more than nodes with two children.

    TYPES OF BINARY TREES
    -----------------------------

    1)  Full Binary :A Binary Tree is a full binary tree if every node has 0 or 2 children.
        The following are the examples of a full binary tree.
        We can also say a full binary tree is a binary tree,
        in which all nodes except leaf nodes have two children.
               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40

             18
           /    \   
         15     20    
        /  \       
      40    50   
    /   \
   30   50

               18
            /     \  
          40       30  
                   /  \
                 100   40

    2)  Complete Binary Tree:A Binary Tree is a Complete Binary Tree if all the levels are completely filled except possibly the last level
        and the last level has all keys as left as possible
               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40


               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40
     /  \   /
    8   7  9 
    
    
    3)  Perfect Binary Tree:  A Binary tree is a Perfect Binary Tree in which all the internal nodes have two children 
        and all leaf nodes are at the same level. 
        The following are the examples of Perfect Binary Trees.
               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40


               18
           /       \  
         15         30   

    
    
    4)  Balanced Binary Trees: A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree,
        in which the height of the left and right subtree of any node differ by not more than 1.
        The given image is an example of this type of binary trees
        https://cdn.programiz.com/sites/tutorial2program/files/balanced-binary-tree.png


*/

// Defining the class Node

class Node {
    constructor ( cargo = undefined, _id = undefined, parent = undefined, left_node = undefined, right_node = undefined ) {
        this.cargo = cargo;
        this._id = _id;
        this.parent = parent;
        this.left_node = left_node;
        this.right_node = right_node;
    }

    setLeftNode ( left_node = undefined ) { this.left_node = left_node; }
    setRightNode ( right_node = undefined ) { this.right_node = right_node; }
    setCargo ( cargo = undefined ) { this.cargo = cargo; }
    setParent ( parent = undefined ) { this.parent = parent; }
    setID ( _id = undefined ) { this._id = _id; }

    getLeftNode () { return this.left_node; }
    getRightNode () { return this.right_node; }
    getCargo () { return this.cargo; }
    getParent () { return this.parent; }
    getID () { return this._id; }

}

// Defining the Class BinaryTree

class BinaryTree {
    constructor () { 
        this.rootnode = undefined;
        this._id = 0;
    }
    insertLeftNode ( rootnode = undefined, cargo = undefined ) {
        let node = new Node ( cargo, this._id, rootnode );
        if (!rootnode) {
            rootnode = node;
        } else {
            rootnode.setLeftNode ( node );
        }
        this._id++;
        return rootnode;
    }
    insertRightNode ( rootnode = undefined, cargo = undefined ) {
        let node = new Node ( cargo, this._id, rootnode );
        if (!rootnode) {
            rootnode = node;
        } else {
            rootnode.setRightNode ( node );
        }
        this._id++;
        return rootnode;
    }
    setRoot ( rootnode = undefined ) { this.rootnode = rootnode; }
    getRoot () { return this.rootnode; }
    findNode ( rootnode = undefined, _id = undefined ) {
        if (rootnode && _id) {
            if (rootnode.getID () === _id) {
                return rootnode;
            } else {
                let left_result = this.findNode ( rootnode.getLeftNode (), _id );
                if (left_result && left_result.getID () === _id) {
                    return left_result;
                }
                let right_result = this.findNode ( rootnode.getRightNode (), _id );
                if (right_result && right_result.getID () === _id) {
                    return right_result;
                }
            }
        }
        return undefined;
    }
    displayBinaryTree ( rootnode = undefined ) {
        if (rootnode) {
            console.log (rootnode.getCargo ());
            this.displayBinaryTree ( rootnode.getLeftNode () );
            this.displayBinaryTree ( rootnode.getRightNode () );
        }
    }
}

// Defining the main function

let main = () => {
    let tree = new BinaryTree ();
    tree.setRoot (tree.insertLeftNode (tree.getRoot (), 10));
    tree.setRoot (tree.insertLeftNode (tree.getRoot (), 20));
    tree.setRoot (tree.insertRightNode (tree.getRoot (), 30));
    tree.displayBinaryTree (tree.getRoot ());

    let second_id_node = tree.findNode (tree.getRoot (), 2);
    console.log (second_id_node.getCargo ());

    tree.insertLeftNode (second_id_node, 40);
    tree.insertRightNode (second_id_node, 50);

    tree.displayBinaryTree (tree.getRoot ());

    let third_id_node = tree.findNode (tree.getRoot (), 3);
    console.log (third_id_node.getCargo ());

    let non_existent_node = tree.findNode (tree.getRoot (), 9);
    console.log (non_existent_node);

}

main ();