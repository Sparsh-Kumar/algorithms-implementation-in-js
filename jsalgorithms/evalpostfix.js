

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
                let testNode = this.top;
                node.next = testNode;
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

let isDigit = (number) => {
    let re = /^\d$/;
    return re.test (number);
}

let evalpostfix = (exp) => {
    let stack = new Stack ();
    for (item in exp) {
        if (isDigit (exp [item])) {
            stack.push (parseInt (exp [item]));
        }
        else {
            let node1 = stack.pop ();
            let node2 = stack.pop ();
            let value1 = undefined;
            let value2 = undefined;
            if (node1 && node2) {
                value1 = node1.cargo;
                value2 = node2.cargo;
                if (exp [item] === '+') {
                    stack.push (value1 + value2);
                }
                else if (exp [item] === '-') {
                    stack.push (value1 - value2);
                }
                else if (exp [item] === '/') {
                    stack.push (value1 / value2);
                }
                else if (exp [item] === '*') {
                    stack.push (value1 * value2);
                }
                else {
                    console.log ('cannot identify the operator');
                    return -1;
                }
            }
            else {
                console.log ('sorry cannot pop sufficient values from the stack');
                return -1;
            }
        }
        //stack.display ();
    }
    return stack.pop ().cargo;
}

let main = () => {
    let exp = "23+45-6**";
    let result = evalpostfix (exp);
    console.log (`result = ${result}`);
}

main ();