class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    KthFrontEnd(k) {
        if (k < 0) {
            throw new Error("Exception: k must be a non-negative integer.");
        }

        let pointer1 = this.head;
        let pointer2 = this.head;
        let count = 0;

        while (pointer1) {
            pointer1 = pointer1.next;
            if (count > k) {
                pointer2 = pointer2.next; 
            }
            count++;
        }

        if (count <= k) {
            throw new Error(`Exception: The list does not contain ${k+1} nodes.`)
        }

        return pointer2.value;
    }
}

module.exports = { Node, LinkedList };