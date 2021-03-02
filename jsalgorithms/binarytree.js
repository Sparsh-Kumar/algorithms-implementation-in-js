

// defining the class Node

class Node {
    constructor (cargo = undefined, leftnode = undefined, rightnode = undefined, identifier = undefined) {
        this.cargo = cargo;
        this.leftnode = leftnode;
        this.rightnode = rightnode;
        this.identifier = identifier;
    }
    insertLeftNode (childnode = undefined) {
        if (childnode) {
            this.leftnode = childnode;
        }
    }
    insertRightNode (childnode = undefined) {
        if (childnode) {
            this.rightnode = childnode;
        }
    }
    getLeftNode () { return this.leftnode; }
    getRightNode () { return this.rightnode; }
    setId (id = undefined) {
        this.identifier = id;
    }
    getId () {
        return this.identifier;
    }
    setCargo (cargo = undefined) {
        this.cargo = cargo;
    }
    getCargo () {
        return this.cargo;
    }
}

// defining the Tree class

class Tree {
    constructor () {
        this.root = undefined;
    }
    insertLeftChild (rootnode = undefined, cargo = 0) {
        let node = new Node (cargo);
        if (!rootnode) { rootnode = node; }
        else {
            
        }
    }
}