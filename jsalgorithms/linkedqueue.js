
/*
    in linked queue the insertion are done on
    rear node and deletions are done on front node
*/

class Node {
    constructor (cargo = undefined, next = undefined) {
        this.cargo = cargo;
        this.next = next;
    }
}

class Queue {
    constructor () {
        this.front = undefined;
        this.rear = undefined;
    }
    insert (cargo) {
        if (cargo) {
            let node = new Node (cargo);
            if (!this.front || !this.rear) {
                this.front = node;
                this.rear = node;
            }
            else {
                this.rear.next = node;
                this.rear = this.rear.next;
            }
        }
    }
    remove () {
        let node = this.front;
        this.front = this.front.next;
        return node;
    }
    display () {
        let front = this.front;
        while (front !== this.rear) {
            console.log (`Cargo=${front.cargo}`);
            front = front.next;
        }
        console.log (`Cargo=${front.cargo}`);
    }
    pop () {
        return this.front;
    }
}

let main = () => {
    let queue = new Queue ();
    for (let i = 0;i < 5;i++) {
        queue.insert (i);
    }

    queue.display ();
    console.log ('Removing and displaying');
    queue.remove ();
    queue.display ();
    console.log ('Pushing another value');
    queue.insert (345);
    queue.display ();
}

main ();
