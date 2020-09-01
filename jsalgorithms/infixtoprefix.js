

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
                let startNode = this.top;
                node.next = startNode;
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
            console.log (`cargo = ${startNode.cargo}`);
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

const infixtoprefix = (infix) => {
    let stack = new Stack ();
    let postfix = "";
    stack.push ('(');
    for (let i = 0;i < infix.length;i++) {
        if (infix [i] === '(') {
            stack.push ('(');
        }
        else if (infix [i] === ')') {
            while (true) {
                let node = stack.pop ();
                if (!node || (node.cargo === '(')) {
                    break;
                }
                postfix = postfix + node.cargo;
            }
        }
        else if ((infix [i].length === 1) && (/^[A-Z]$/i.test(infix [i]))) {
            postfix = postfix + infix [i];
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
                postfix = postfix + node.cargo;
            }
            stack.push (exp);
        }
    }
    return postfix;
}

let main = () => {
    let infix = "(A+B)*(C+D)";
    let modified = "";
    let prefix = "";
    for (let i = 0;i < infix.length;i++) {
        let e = infix [infix.length - 1 - i];
        if (e === ')') {
            e = '(';
        }
        else if (e === '(') {
            e = ')';
        }
        modified = modified + e;
    }
    modified = modified + ')';
    let postfix = infixtoprefix (modified);
    for (let i = 0;i < postfix.length;i++) {
        prefix = prefix + postfix [postfix.length - 1 -i];
    }
    console.log (`Prefix = ${prefix}`);
}

main ()