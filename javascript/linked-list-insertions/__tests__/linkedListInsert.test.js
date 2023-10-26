const { LinkedList } = require('../index');

describe('LinkedList', () => {
    let ll;

    beforeEach(() => {
        ll = new LinkedList();
    });

    it('can successfully add a node to the end of the linked list', () => {
        ll.append(1);
        expect(ll.head.value).toBe(1);
    });

    it('can successfully add multiple nodes to the end of a linked list', () => {
        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(ll.head.value).toBe(1);
        expect(ll.head.next.value).toBe(2);
        expect(ll.head.next.next.value).toBe(3);
    });

    it('can successfully insert a node before a node located in the middle of a linked list', () => {
        ll.append(1);
        ll.append(3);
        ll.append(4);
        ll.insertBefore(3, 2);
        expect(ll.head.next.value).toBe(2);
    });

    it('can successfully insert a node before the first node of a linked list', () => {
        ll.append(1);
        ll.insertBefore(1, 0);
        expect(ll.head.value).toBe(0);
    });

    it('can successfully insert after a node in the middle of the linked list', () => {
        ll.append(1);
        ll.append(2);
        ll.append(4);
        ll.insertAfter(2, 3);
        expect(ll.head.next.next.value).toBe(3);
    });

    it('can successfully insert a node after the last node of the linked list', () => {
        ll.append(1);
        ll.append(2);
        ll.insertAfter(2, 3);
        expect(ll.head.next.next.value).toBe(3);
    });

    it('throws an error when trying to insert before a value not present in the list', () => {
        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(() => ll.insertBefore(4, 5)).toThrow(`No node with value 4 found`);
    });

    it('throws an error when trying to insert after a value not present in the list', () => {
        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(() => ll.insertAfter(4, 5)).toThrow(`No node with value 4 found`);
    });

    it('throws an error when trying to insert before a value in an empty list', () => {
        expect(() => ll.insertBefore(1, 2)).toThrow('List is empty');
    });

    it('throws an error when trying to insert after a value in an empty list', () => {
        expect(() => ll.insertAfter(1, 2)).toThrow('List is empty');
    });
});
