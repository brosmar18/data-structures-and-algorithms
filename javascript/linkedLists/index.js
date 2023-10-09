'use strict';

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

    // Insert method
    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    // Includes method 
    includes(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // to string method
    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `{ ${current.value} } -> `;
            current = current.next;
        }
        return result + 'NULL';
    }

}

module.exports = LinkedList;
