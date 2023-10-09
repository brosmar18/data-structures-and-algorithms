const LinkedList = require('../index.js');

describe('Linked List', () => {

    it('Can successfully instantiate an empty linked list', () => {
        const list = new LinkedList();
        expect(list.head).toBeNull();
    });
});
