function validateBrackets(str) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        if (char in map) {
            let topElement = stack.length === 0 ? '#' : stack.pop();
            if (map[char] !== topElement) {
                return false;
            }
        } else if ('({['.includes(char)) {
            stack.push(char);
        }
    }

    return stack.length === 0;
}


module.exports = validateBrackets;
