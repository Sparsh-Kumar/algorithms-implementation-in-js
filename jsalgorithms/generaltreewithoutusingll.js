

// defining the class Node


class Node {
    constructor (cargo = undefined, child = [], parent = undefined, identifier = undefined) {
        this.cargo = cargo;
        this.child = child;
        this.parent = parent;
        this.identifier = identifier;
    }

    insertChild (childnode = undefined) {
        this.child.push (childnode);
    }

    setParent (parentnode = undefined) {
        this.parent = parentnode;
    }

    setId (identifier = undefined) {
        this.identifier = identifier;
    }

    getId () {
        return this.identifier;
    }

    getCargo () {
        return this.cargo;
    }

    getParent () {
        return this.parent;
    }

    getChild () {
        return this.child;
    }

    getDetails () {
        return {
            cargo: this.cargo,
            child: this.child,
            parent: this.parent,
            id: this.identifier
        }
    }
}

// defining the class Tree 

class Tree {

    constructor () {
        this.rootnode = undefined;
        this._id = 0;
    }

    insertChildNode (rootnode = undefined, cargo = 0) {
        let node = new Node (cargo, [], rootnode, this._id);
        if (!rootnode) {
            rootnode = node;
        } else {
            rootnode.insertChild (node);
        }
        this._id++;
        return rootnode;
    }

    insertSiblingNode (rootnode = undefined, cargo = 0) {

        if (!rootnode || !rootnode.getParent ()) {
            return undefined;
        }

        // if the rootnode exists then get parent of rootnode
        return this.insertChildNode (rootnode.getParent (), cargo);
    }
    
    findNode (rootnode = undefined, id = undefined) {
        if (!rootnode || !id) {
            return undefined;
        } else if (rootnode.getId () === id) {
            return rootnode;
        } else {
            for (let childs of rootnode.getChild ()) {
                let result = this.findNode (childs, id);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }

    displayTree (rootnode = undefined) {
        if (!rootnode) {
            return undefined;
        } else {
            console.log (`[(C,${rootnode.getCargo ()}),(${rootnode.getId ()})]`);
            for (let childs of rootnode.getChild ()) {
                this.displayTree (childs)
            }
        }
    }

    getRootNode () {
        return this.rootnode;
    }

    setRootNode (rootnode = undefined) {
        this.rootnode =  rootnode;
    }

}



const main = () => {
    const tree = new Tree ();
    tree.setRootNode (tree.insertChildNode (tree.getRootNode (), 2));
    tree.setRootNode (tree.insertChildNode (tree.getRootNode (), 3));
    tree.setRootNode (tree.insertChildNode (tree.getRootNode (), 4));
    tree.setRootNode (tree.insertChildNode (tree.getRootNode (), 5));
    tree.setRootNode (tree.insertChildNode (tree.getRootNode (), 6));
    //tree.displayTree (tree.getRootNode ());
    
    // get the node whose id is 3
    let thirdNode = tree.findNode (tree.getRootNode (), 3);
    tree.insertSiblingNode (thirdNode, 9);
    
    // getting the node whose id is 5 i.e last node whose cargo is 9
    let fourthNode = tree.findNode (tree.getRootNode (), 2);
    tree.insertChildNode (fourthNode, 99);
    tree.insertChildNode (fourthNode, 999);

    // displaying the tree again
    tree.displayTree (tree.getRootNode ());

    // finding the node that doesnot exists
    let nonexistingnode = tree.findNode (tree.getRootNode (), 908);
    console.log (nonexistingnode);
}

main ()