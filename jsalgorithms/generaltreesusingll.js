

class Node {
    
    constructor (child = undefined, parent = undefined, sibling = undefined, cargo = undefined, identifier = undefined) {
        this.child = child;
        this.parent = parent;
        this.sibling = sibling;
        this.cargo = cargo;
        this.identifier = identifier;
    }

    getChild () {
        return this.child;
    }

    getParent () {
        return this.parent;
    }

    getSibling () {
        return this.sibling;
    }

    getCargo () {
        return this.cargo;
    }

    getIdentifier () {
        return this.identifier
    }

    setChild (child = undefined) {
        this.child = child;
    }

    setParent (parent = undefined) {
        this.parent = parent;
    }

    setSibling (sibling = undefined) {
        this.sibling = sibling;
    }

    setCargo (cargo = undefined) {
        this.cargo = cargo;
    }

    setIdentifier (identifier = undefined) {
        this.identifier = identifier;
    }

    getDetails () {
        return {
            child: this.child,
            parent: this.parent,
            sibling: this.sibling,
            cargo: this.cargo,
            id: this.identifier
        }
    }
};


class Tree {
    constructor () {
        this.rootnode = undefined;
        this.identifier = 0;
    }

    insertChild (root = undefined, cargo = undefined) {
        let node = new Node (undefined, root, undefined, cargo, this.identifier);
        if (!root) {
            root = node;
        } else {
            let firstChild = root.getChild ();
            if (!firstChild) {
                root.setChild (node);
            } else {
                while (firstChild.getSibling ()) {
                    firstChild = firstChild.getSibling ();
                }
                firstChild.setSibling (node);
            }
        }
        this.identifier++;
        return root;
    }

    insertSibling (root = undefined, cargo = undefined) {
        if (!root) {
            return undefined;
        }
        let node = new Node (undefined, root.getParent (), undefined, cargo, this.identifier);
        let firstNode = root;
        while (firstNode.getSibling ()) {
            firstNode = firstNode.getSibling ();
        }
        firstNode.setSibling (node);
        this.identifier++;
        return root;
    }

    setRoot (root = undefined) {
        this.rootnode = root;
        return this.rootnode;
    }

    getRoot () {
        return this.rootnode;
    }

    displaySibling (root = undefined) {
        if (!root) {
            return undefined;
        }
        let first = root;
        while (first) {
            console.log (first.getDetails ());
            first = first.getSibling ();
        }
        return root;
    }

    displayChild (root = undefined) {
        if (!root || !root.getChild ()) {
            return undefined;
        }
        let firstChild = root.getChild ();
        while (firstChild) {
            console.log (firstChild.getDetails ());
            firstChild = firstChild.getSibling ();
        }
        return root;
    }

    displayTree (root = undefined) {
        if (!root) {
            return undefined;
        }
        console.log (root.getDetails ().cargo);
        let firstChild = root.getChild ();
        while (firstChild) {
            this.displayTree (firstChild);
            firstChild = firstChild.getSibling ();
        }
        return root;
    }

    findNode (root = undefined, identifier = undefined) {
        if (!root || !identifier) {
            return undefined;
        } else if (identifier === 0) {
            return this.rootnode;
        } else if (root.getIdentifier () === identifier) {
            return root;
        } else {
            let firstChild = root.getChild ();
            while (firstChild) {
                if (firstChild.getIdentifier () === identifier) {
                    return firstChild;
                }
                firstChild = this.findNode (firstChild, identifier);
                if (firstChild && firstChild.getIdentifier () === identifier) {
                    return firstChild;
                }
                if (firstChild) {
                    firstChild = firstChild.getSibling ();
                }
            }
        }
        return root;
    }

}


let main = () => {
    let tree = new Tree ();
    tree.setRoot (tree.insertChild (tree.getRoot (), 1));
    tree.setRoot (tree.insertChild (tree.getRoot (), 2));
    tree.setRoot (tree.insertChild (tree.getRoot (), 3));
    tree.setRoot (tree.insertChild (tree.getRoot (), 4));
    tree.setRoot (tree.insertChild (tree.getRoot (), 5));
    thirdnode = tree.findNode (tree.getRoot (), 2);
    tree.insertChild (thirdnode, 6);
    sixthnode = tree.findNode (tree.getRoot (), 5);
    tree.insertSibling (sixthnode, 7);
    tree.insertSibling (sixthnode, 8);
    seventhnode = tree.findNode (tree.getRoot (), 6)
    tree.insertChild (seventhnode, 9);
    tree.insertChild (seventhnode, 10);
    tree.insertChild (seventhnode, 11);
    eleventhnode = tree.findNode (tree.getRoot (), 10);
    tree.insertChild (eleventhnode, 12);
    tree.insertChild (eleventhnode, 13);

    // displaying the tree
    tree.displayTree (tree.getRoot ());
}

main ();