


class Node {
    constructor (cargo = undefined, next = undefined) {
        this.cargo = cargo;
        this.next = next;
    }
}


class Stack {
    constructor () {
        this.top = undefined;
    }
    push (cargo) {
        if (cargo) {
            let node = new Node (cargo);
            if (!this.top) {
                this.top = node;
            }
            else {
                let topNode = this.top;
                node.next = topNode;
                this.top = node;
            }
        }
    }
    pop () {
        let node = undefined;
        if (this.top) {
            node = this.top;
            this.top = this.top.next;
        }
        return node;
    }
    display () {
        let startNode = this.top;
        while (startNode) {
            console.log (`Cargo = ${startNode.cargo}`);
            startNode = startNode.next;
        }
    }
}

const main = () => {
    let t = "sparsh";
    let stack = new Stack ();
    for (let i = 0;i < t.length;i++) {
        stack.push (t[i]);
    }
    stack.display ();
    let node = stack.pop ();
    console.log (`popped value = ${node.cargo}`);
    stack.display ();
}

main ();