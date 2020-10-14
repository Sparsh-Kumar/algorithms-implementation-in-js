

class Node {
    constructor (cargo = undefined, priority = 0, next = undefined) {
        this.cargo = cargo;
        this.priority = priority;
        this.next = next;
    }
}

class PriorityQueue {
    constructor () {
        this.front = this.rear = undefined;
        this.queuelength = 0;
    }

    insert (cargo = undefined, priority = 0) {
        if (cargo) {
            let node = new Node (cargo, priority);
            if (!this.front || this.front.priority >= node.priority) {
                node.next = this.front;
                this.front = node;
            }
            else {
                let startNode = this.front;
                while (startNode.next && startNode.next.priority <= node.priority) {
                    startNode = startNode.next;
                }
                node.next = startNode.next;
                startNode.next = node;
            }
            this.queuelength = this.queuelength + 1;
        }
    }

    remove () {
        let node = undefined;
        if (this.front) {
            node = this.front;
            this.front = this.front.next;
            this.queuelength = this.queuelength - 1;
        }
        return node;
    }

    display () {
        let startNode = this.front;
        console.log (`Length of Priority Queue = ${this.queuelength}`);
        while (startNode) {
            console.log (`Cargo = ${startNode.cargo}, Priority = ${startNode.priority}`);
            startNode = startNode.next;
        } 
    }
}

let getpriority = (min, max) => {
    return Math.floor (Math.random () * (max - min)) + min;
}

let main = () => {
    let pq = new PriorityQueue ();
    let data = [123, 4, 45, 5, 567, 7];
    for (let i in data) {
        pq.insert (data [i], getpriority (-4, 4));
    }
    pq.display ();

    console.log ('Popping the value from the priority Queue');
    let poppedItem = pq.remove ();
    console.log (`Popped value is ${poppedItem.cargo}, Priority = ${poppedItem.priority}`);

    pq.display ();
}

main ();