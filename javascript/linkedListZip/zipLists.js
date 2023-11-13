const { LinkedList } = require('./linkedList');

function zipLists(list1, list2) {
    if (!list1.head) return list2;
    if (!list2.head) return list1;

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null && current2 !== null) {
        let next1 = current1.next;
        let next2 = current2.next;

        current1.next = current2;
        if (next1 === null) break;
        current2.next = next1;

        current1 = next1;
        current2 = next2;
    }

    return list1;
}

module.exports = zipLists;
