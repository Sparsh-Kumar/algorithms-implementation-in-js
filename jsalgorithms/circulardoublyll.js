
/*
    Code for circular doubly linked list
*/

class Node {

    constructor (prev = undefined, cargo = undefined, next = undefined) {
        this.prev = prev;
        this.cargo = cargo;
        this.next = next;
    }

};


let start = undefined;

let Display = (parentNode) => {

    let ptr = parentNode;
    while (ptr.next !== start) {
        console.log (`Cargo = ${ptr.cargo}`);
        ptr = ptr.next;
    }

    console.log (`Cargo = ${ptr.cargo}`);
    return parentNode;

}

let Insert = (cargo) => {

    let node = new Node (undefined, cargo, undefined);

    if (!start) {

        start = node;
        node.prev = start;
        node.next = start;

    }

    else {
        let ptr = start;
        while (ptr.next !== start) {
            ptr = ptr.next;
        }

        node.prev = ptr;
        node.next = start;

        ptr.next = node;
        start.prev = node;
    }
    return start;

}


let main = () => {

    for (let i = 0;i < 12;i++) {
        start = Insert (i);
    }

    start = Display (start);
}

main ();