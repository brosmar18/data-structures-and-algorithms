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

module.exports = leftJoin;