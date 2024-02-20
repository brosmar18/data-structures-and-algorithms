function findRepeatedWord(inputString) {
    const wordCounts = {};
    const wordsArray = inputString.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/);
    for (const word of wordsArray) {
      if (wordCounts[word]) {
        return word; // First repeated word found
      }
      wordCounts[word] = 1; // Initialize word count
    }
    return null; // No repeated words found
  }
  
  module.exports = findRepeatedWord;