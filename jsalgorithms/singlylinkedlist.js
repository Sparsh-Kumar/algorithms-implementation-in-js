
/*
    This is the singly linked list Code in JS
*/


/*
    Note: Spread Syntax in JS can make the clone of an array such as a = [1, 3, 4]
    as an array like b = [...a] or as an Object like b = {...a}
    in array case
    b = a = [1, 3, 4]
    in Object case
    b = {'0': 1, '1': 3, '2': 4}

    Note: Spread Syntax in JS can make the clone of an Object Only as an Object not as an array
    like a = {name: "sparsh", age: 22}
    if b = {...a}
    then
    b = {name: "sparsh", age: 22}

*/


class Node {

    constructor (cargo = undefined, next = undefined) {

        this.cargo = cargo;
        this.next = next;

    }

};

let start = undefined;

let Insert = (cargo) => {

    let node = new Node (cargo);
    if (!start) {
        start = node;
    }
    else {
        let ptr = start;
        
        while (ptr.next) {
            ptr = ptr.next;
        }

        ptr.next = node;

    }

    return start;

}

let Display = (parentNode) => {

    let ptr = parentNode;
    while (ptr) {
        console.log (`Cargo = ${ptr.cargo}`);
        ptr = ptr.next;
    }

    return parentNode;
}

let main = () => {

    for (let index = 0;index < 10;index = index + 1) {
        start = Insert (index);
    }

    start = Display (start);

}

main ()