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

module.exports = mostCommonWord;
