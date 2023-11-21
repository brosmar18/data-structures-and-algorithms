'use strict';

const { Stack, Queue } = require('../index');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Stack is empty');
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});

describe('Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.back.value).toEqual(3);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow('Queue is empty');
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
