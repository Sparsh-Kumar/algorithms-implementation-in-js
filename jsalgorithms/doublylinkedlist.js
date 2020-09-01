
/*
    Code for doubly linked list
*/

class Node {

    constructor (prev, cargo, next) {

        this.prev = prev;
        this.cargo = cargo;
        this.next = next;

    }

};


let start = undefined;

const Display = (parentNode) => {

    let ptr = parentNode;
    while (ptr) {
        console.log (`Cargo = ${ptr.cargo}`);
        ptr = ptr.next;
    }

    return start;

}

const Insert = (cargo) => {

    let node = new Node (undefined, cargo, undefined);

    if (!start) {
        start = node;
    }

    else {
        let ptr = start;
        while (ptr.next) {
            ptr = ptr.next;
        }

        node.prev = ptr;
        ptr.next = node;

    }

    return start;

}

let main = () => {

    for (let i = 0;i < 10;i++) {
        start = Insert (i);
    }

    start = Display (start);

}

main ()