function uniqueCharacters(str) {
  let charMap = new Map();
  
  for (let char of str.toLowerCase()) {
    if (char !== ' ') {
      if (charMap.has(char)) {
        return false;
      }
    charMap.set(char, true)
    }
  }
  return true;
}
