

class Node {
    constructor (cargo = undefined, next = undefined) {
        this.cargo = cargo;
        this.next = next;
    }
}

class Stack {
    constructor () {
        this.top = undefined;
        this.stacklen = 0;
    }
    push (cargo) {
        if (cargo) {
            let node = new Node (cargo);
            if (!this.top) {
                this.top = node;
            }
            else {
                let startNode = this.top;
                node.next = startNode;
                this.top = node;
            }
            this.stacklen++;
        }
    }
    pop () {
        let node = undefined;
        if (this.top) {
            node = this.top;
            this.top = this.top.next;
            this.stacklen--;
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

const getpref = (op) => {
    if ((op === '+') || (op === '-')) {
        return 0;
    }
    else if ((op === '*') || (op === '/')) {
        return 1;
    }
    else {
        return -1;
    }
}

const infix2postfix = (infix) => {
    let stack = new Stack ();
    stack.push ('(');
    let postfix = "";
    for (let i = 0;i < infix.length;i++) {
        if (infix [i] === '(') {
            stack.push ('(');
        }
        else if ((infix [i].length === 1) && (/^[A-Z]$/i.test(infix [i]))) {
            postfix = postfix + infix [i];
        }
        else if (infix [i] === ')') {
            while (true) {
                let node = stack.pop ();
                if (!node || node.cargo === '(') {
                    break;
                }
                postfix = postfix + node.cargo;
            }
        }
        else {
            let exp = infix [i];
            while (true) {
                let node = stack.pop ();
                if (!node || (getpref (node.cargo) < getpref (exp)) || (getpref (exp) === -1)) {
                    if (node) {
                        stack.push (node.cargo);
                    }
                    break;
                }
                else {
                    postfix = postfix + node.cargo;
                }
            }
            stack.push (exp);
        }
    }
    return postfix;
}

const main = () => {

    let expression = "(A+B)*(C+D)";
    let postfix = infix2postfix (expression + ')');
    console.log (postfix);
    
}

main ();