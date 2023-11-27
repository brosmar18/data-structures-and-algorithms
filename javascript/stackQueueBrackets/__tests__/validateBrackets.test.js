const validateBrackets = require('../index');

describe('validateBrackets function tests', () => {
    test('validateBrackets("{}") should return true', () => {
        expect(validateBrackets("{}")).toBe(true);
    });

    test('validateBrackets("{}(){}") should return true', () => {
        expect(validateBrackets("{}(){}")).toBe(true);
    });

    test('validateBrackets("()[[Extra Characters]]") should return true', () => {
        expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
    });

    test('validateBrackets("(){}[[]]") should return true', () => {
        expect(validateBrackets("(){}[[]]")).toBe(true);
    });

    test('validateBrackets("{}{Code}[Fellows](())") should return true', () => {
        expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
    });

    test('validateBrackets("[({}]") should return false', () => {
        expect(validateBrackets("[({}]")).toBe(false);
    });

    test('validateBrackets("(]") should return false', () => {
        expect(validateBrackets("(]")).toBe(false);
    });

    test('validateBrackets("{(})") should return false', () => {
        expect(validateBrackets("{(})")).toBe(false);
    });
});
