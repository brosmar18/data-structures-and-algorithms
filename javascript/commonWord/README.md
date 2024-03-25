# commonWord

The challenge is to create a function that determines which word appears most frequently within a given text, such as a book. Utilizing a hash table for optimal performance in tracking the frequency of each word.


## Whiteboard Process

![commonWord Whiteboard](../assets/commonWordWhiteboard.png);


## Approach & Efficiency

### Approach

The `mostCommonWord` function adopts a straightforward approach to solve the problem of finding the most frequent word in a text. It begins by converting the entire input text to lowercase to ensure case insensitivity, and then it employs a regular expression to extract all the words, effectively ignoring punctuation. These words are stored in an array. The function iterates over this array, using a hash table (`wordCounts`) to tally the occurrences of each word. For each word encountered, the function updates the count in the hash table. Concurrently, it keeps track of the most common word and its count (`maxCount` and `mostCommon` variables) to avoid a second iteration through the hash table. This method ensures that once the final word has been tallied, the function already knows which word is the most frequent.

### Efficiency 

The efficiency of this solution is governed by its time and space complexity:

- **Time Complexity**: O(n), where n is the number of words in the input text. Each word is processed exactly once to update the hash table with its frequency, making the time complexity linear with respect to the number of words.

- **Space Complexity**: O(k), where k is the number of unique words in the input text. The space complexity depends on the size of the hash table used to keep track of word counts. In the worst case, if every word in the text is unique, the space complexity will be linear with respect to the number of words. However, in practical scenarios, many words will be repeated, potentially reducing the space requirements.

## Solution

```js
function mostCommonWord(text) {
    const words = text.toLowerCase().match(/\w+/g);
    const wordCounts = {};
    let maxCount = 0;
    let mostCommon = "";

    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        if (wordCounts[word] > maxCount) {
            maxCount = wordCounts[word];
            mostCommon = word;
        }
    }

    return mostCommon;
}


```
