class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new ListNode(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new ListNode(value);
    }
}

module.exports = { LinkedList };
