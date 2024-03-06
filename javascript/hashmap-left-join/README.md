# hashmap LEFT JOIN

Write a function named leftJoin to merge two hashmaps through a LEFT JOIN operation. The function receives two parameters: the first hashmap contains word strings as keys with their synonyms as values, while the second hashmap also uses word strings as keys but with their antonyms as values. The objective is to combine the contents of both hashmaps by ensuring all entries from the first hashmap are included, paired with their matching antonyms from the second hashmap when available, or a null placeholder otherwise.

## Whiteboard Process

![Hashmap LEFT JOIN Whiteboard](../assets/);

## Approach & Efficiency

### Approach

The `leftJoin` function implements a straightforward strategy to combine two hashmaps based on LEFT JOIN logic. The function iterates through each entry in the `synonyms` hashmap and checks for corresponding entries in the `antonyms` hashmap. For each key in `synonyms`, the function searches the `antonyms` hashmap for a matching key. If a match is found, the key and both its synonym and antonym are aggregated into a single array and pushed to the result array. If no matching key is found in `antonyms`, the function appends a null placeholder for the antonym to signify the absence of a corresponding entry. This process ensures that all entries from the `synonyms` hashmap are included in the result, adhering to the LEFT JOIN principle where all records from the left table are returned with matched records from the right table, or null if no match exists.


### Efficiency 
The efficiency of this solution is governed by its time and space complexity:

- **Time Complexity**: O(n) where n is the number of entries in the first hashmap. This is because we have to traverse every entry in the first hashmap. 

- **Space Complexity**: O(n) for storing the result. The space needed depends on the size of the first hashmap and partially on the second hashmap if matching keys exist.


## Solution

```js
function leftJoin(synonyms, antonyms) {
  let result = [];

  for (let key in synonyms) {
    if (antonyms.hasOwnProperty(key)) {
      result.push([key, synonyms[key], antonyms[key]]);
    } else {
      result.push([key, synonyms[key], null]);
    }
  }

  return result;
}

```
