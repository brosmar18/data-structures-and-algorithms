const { LinkedList } = require('../linkedList');
const zipLists = require('../zipLists');

function listToArray(list) {
    let array = [];
    let current = list.head;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}

describe('zipLists Tests', () => {
    test('Both lists are of equal length', () => {
        let list1 = new LinkedList();
        [1, 3, 2].forEach(elem => list1.append(elem));
        let list2 = new LinkedList();
        [5, 9, 4].forEach(elem => list2.append(elem));

        let zippedList = zipLists(list1, list2);
        expect(listToArray(zippedList)).toEqual([1, 5, 3, 9, 2, 4]);
    });

    test('First list is longer', () => {
        let list1 = new LinkedList();
        [1, 3, 2, 6].forEach(elem => list1.append(elem));
        let list2 = new LinkedList();
        [5, 9].forEach(elem => list2.append(elem));

        let zippedList = zipLists(list1, list2);
        expect(listToArray(zippedList)).toEqual([1, 5, 3, 9, 2, 6]);
    });

    test('Second list is longer', () => {
        let list1 = new LinkedList();
        [1, 3].forEach(elem => list1.append(elem));
        let list2 = new LinkedList();
        [5, 9, 4, 7].forEach(elem => list2.append(elem));

        let zippedList = zipLists(list1, list2);
        expect(listToArray(zippedList)).toEqual([1, 5, 3, 9, 4, 7]);
    });

    test('First list is empty', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        [5, 9, 4].forEach(elem => list2.append(elem));

        let zippedList = zipLists(list1, list2);
        expect(listToArray(zippedList)).toEqual([5, 9, 4]);
    });

    test('Second list is empty', () => {
        let list1 = new LinkedList();
        [1, 3, 2].forEach(elem => list1.append(elem));
        let list2 = new LinkedList();

        let zippedList = zipLists(list1, list2);
        expect(listToArray(zippedList)).toEqual([1, 3, 2]);
    });
});
