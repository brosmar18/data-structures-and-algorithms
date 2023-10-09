const LinkedList = require('../index.js');

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
});
