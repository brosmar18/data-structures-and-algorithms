'use strict';

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack underflow");
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items(this.items.length - 1);
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            throw new Error("Queue is empty");
        }
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

module.exports = { Stack, PseudoQueue };