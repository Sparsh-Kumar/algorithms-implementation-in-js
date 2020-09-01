
class Node {
    constructor (cargo = undefined, next = undefined) {
        this.cargo = cargo;
        this.next = next;
    }
}

class Stack {
    constructor () {
        this.top = undefined;
        this.stacklength = 0;
    }
    push (cargo) {
        this.stacklength = this.stacklength + 1;
        const node = new Node (cargo);
        if (!this.top) {
            this.top = node;
        }
        else {
            let start = this.top;
            node.next = start;
            this.top = node;
        }
    }
    pop () {
        this.stacklength = this.stacklength - 1;
        let node = undefined;
        if (this.top) {
            node = this.top;
            this.top = this.top.next;
        }
        return node;
    }
    display () {
        let start = this.top;
        while (start) {
            console.log (`Cargo = ${start.cargo}`);
            start = start.next;
        }
    }
}

class BracesChecker {
    constructor (expression = '') {
        this.expression = expression;
        this.stack = new Stack ();
    }
    checkExp () {
        for (let i = 0; i < this.expression.length;i++) {
            if (this.expression [i] == '}') {
                let node = this.stack.pop ();
                if (!node || node.cargo !== '{') {
                    return false;
                }
            }
            else if (this.expression [i] == ']') {
                let node = this.stack.pop ();
                if (!node || node.cargo !== '[') {
                    return false;
                }
            }
            else if (this.expression [i] == ')') {
                let node = this.stack.pop ();
                if (!node || node.cargo !== '(') {
                    return false;
                }
            }
            else if (this.expression [i] == '(' || this.expression [i] == '[' || this.expression [i] == '{') {
                this.stack.push (this.expression[i]);
            }
            else {
                continue;
            }
        }
        return (this.stack.stacklength == 0) ? true: false;
    }
}

let main = () => {
    const exp = "[{A+B} * (U+K)       [2 + 5]]";
    const Checker = new BracesChecker (exp);
    console.log (Checker.checkExp ());
}

main ();