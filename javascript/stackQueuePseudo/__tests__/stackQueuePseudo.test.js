const { Stack, PseudoQueue } = require('../index');

describe('PseudoQueue Tests', () => {
    let pseudoQueue;

    beforeEach(() => {
        pseudoQueue = new PseudoQueue();
    });

    test('Enqueue Multiple Items', () => {
        pseudoQueue.enqueue(10);
        pseudoQueue.enqueue(20);
        pseudoQueue.enqueue(30);
        expect(pseudoQueue.stack1.items).toEqual([10, 20, 30]);
        expect(pseudoQueue.stack2.items).toEqual([]);
    });


    test('Dequeue After Multiple Enqueues', () => {
        pseudoQueue.enqueue(10);
        pseudoQueue.enqueue(20);
        pseudoQueue.enqueue(30);
        const dequeuedItem = pseudoQueue.dequeue();
        expect(dequeuedItem).toBe(10);
        expect(pseudoQueue.stack1.items).toEqual([]);
        expect(pseudoQueue.stack2.items).toEqual([30, 20]);
    });

    test('Dequeue Until Empty', () => {
        pseudoQueue.enqueue(10);
        pseudoQueue.enqueue(20);
        pseudoQueue.enqueue(30);
        expect(pseudoQueue.dequeue()).toBe(10);
        expect(pseudoQueue.dequeue()).toBe(20);
        expect(pseudoQueue.dequeue()).toBe(30);
        expect(() => pseudoQueue.dequeue()).toThrow('Queue is empty');
    });

    test('Empty Queue Dequeue', () => {
        expect(() => pseudoQueue.dequeue()).toThrow('Queue is empty');
    });

    test('Mixed Data Types', () => {
        pseudoQueue.enqueue('a');
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(true);
        expect(pseudoQueue.stack1.items).toEqual(['a', 1, true]);
        expect(pseudoQueue.dequeue()).toBe('a');
    });

});

describe('Stack Tests', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('Pop on an empty stack throws "Stack underflow"', () => {
        expect(() => stack.pop()).toThrow("Stack underflow");
    });

    test('Peek on an empty stack returns null', () => {
        expect(stack.peek()).toBeNull();
    });

    test('Peek on a non-empty stack returns the last item', () => {
        stack.push('first');
        stack.push('second');
        expect(stack.peek()).toBe('second'); 
    });
});