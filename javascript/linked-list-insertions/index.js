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
        const newNode = new Node(value);
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

    insertBefore(targetValue, valueToInsert) {
        const newNode = new Node(valueToInsert);

        if (!this.head) {
            throw new Error("List is empty");
        }

        if (this.head.value === targetValue) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== targetValue) {
            current = current.next;
        }

        if (!current.next) {
            throw new Error(`No node with value ${targetValue} found`);
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    insertAfter(targetValue, valueToInsert) {
        const newNode = new Node(valueToInsert);

        if (!this.head) {
            throw new Error("List is empty");
        }

        let current = this.head;
        while (current && current.value !== targetValue) {
            current = current.next;
        }

        if (!current) {
            throw new Error(`No node with value ${targetValue} found`);
        }

        newNode.next = current.next;
        current.next = newNode;
    }
}

