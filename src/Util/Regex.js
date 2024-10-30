/**
 * 두 개 이상의 연속된 쉼표(,) 구분자를 찾는 정규 표현식입니다.
 * 입력 문자열에서 연속된 쉼표를 확인하는 데 사용됩니다.
 *
 * @constant {RegExp} consecutiveDelimiterPattern
 * @example
 * consecutiveDelimiterPattern.test('1,,2'); // true
 * consecutiveDelimiterPattern.test('1,2'); // false
 */
const consecutiveDelimiterPattern = /,{2,}/;

/**
 * 양의 정수를 확인하는 정규 표현식입니다.
 * 문자열이 1 이상의 숫자로만 이루어져 있는지 확인하는 데 사용됩니다.
 *
 * @constant {RegExp} isNumber
 * @example
 * isNumber.test('123'); // true
 * isNumber.test('0123'); // false
 * isNumber.test('abc'); // false
 */
const isNumber = /^[1-9]\d*$/;

export { consecutiveDelimiterPattern, isNumber };
