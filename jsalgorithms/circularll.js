

/*
    Code for circular linked llist
*/


class Node {

    constructor (cargo = undefined, next = undefined) {
        this.cargo = cargo;
        this.next = next;
    }

};

let start = undefined;

const Display = (parentNode) => {

    let ptr = parentNode;
    while (ptr.next !== start) {
        console.log (`Cargo = ${ptr.cargo}`);
        ptr = ptr.next;
    }
    console.log (`Cargo = ${ptr.cargo}`);
    return parentNode;

}

const Insert = (cargo) => {

    let node = new Node (cargo);
    if (!start) {
        start = node;
        node.next = start;
    }

    else {
        let ptr = start;
        while (ptr.next !== start) {
            ptr = ptr.next;
        }

        node.next = start;
        ptr.next = node;
    }

    return start;

}

let main = () => {

    for (let i = 0;i < 5;i++) {
        start = Insert (i);
    }

    start = Display (start);

}

main ();