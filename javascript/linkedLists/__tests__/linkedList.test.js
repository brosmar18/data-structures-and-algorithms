const LinkedList = require('../index'); 

describe('Linked List', () => {

  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('test');
    expect(list.head.value).toEqual('test');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    expect(list.head.value).toEqual('second');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    list.insert('third');
    expect(list.head.value).toEqual('third');
    expect(list.head.next.value).toEqual('second');
    expect(list.head.next.next.value).toEqual('first');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    expect(list.includes('first')).toBe(true);
    expect(list.includes('second')).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    expect(list.includes('third')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert('first');
    list.insert('second');
    list.insert('third');
    expect(list.toString()).toEqual('{ third } -> { second } -> { first } -> NULL');
  });

});
