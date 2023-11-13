const { LinkedList } = require('./linkedList');
const zipLists = require('./zipLists');

// Create two linked list instances
let list1 = new LinkedList();
let list2 = new LinkedList();

// Populate the first linked list
[1, 3, 2].forEach(elem => list1.append(elem));

// Populate the second linked list
[5, 9, 4].forEach(elem => list2.append(elem));

// Now you have two separate linked lists, list1 and list2, which can be zipped together
let zippedList = zipLists(list1, list2);

// Function to print the list
function printList(list) {
    let current = list.head;
    while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
    }
    console.log('null');
}

// Print the zipped list
printList(zippedList);
