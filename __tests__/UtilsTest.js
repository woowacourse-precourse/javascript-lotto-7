import ERROR_MESSAGES from '../src/constants/error.js';
import { handleError, isEmptyOrNull, isIntegerNumber, isInvalidNumber, isNegativeNumber } from '../src/utils/index.js';
import Validator from '../src/Validator.js';

describe('유틸 함수', () => {
  test('handleError의 condition이 true이면 예외가 발생한다. ', () => {
    const message = '[ERROR]';

    expect(() => handleError(true, message)).toThrow(message);
  });

  test('입력값에 빈 값 또는 공백이 포함되면 true를 반환한다.', () => {
    expect(isEmptyOrNull(' ')).toBe(true);
    expect(isEmptyOrNull(['1', '2', '3', '', '4', '5'])).toBe(true);
  });

  test('입력값 또는 배열의 요소에 숫자가 아닌 값이 있으면 true를 반환한다.', () => {
    expect(isInvalidNumber('a')).toBe(true);
    expect(isInvalidNumber(['1', '2', '3', '4', '5', 'a'])).toBe(true);
  });

  test('입력값 또는 배열의 요소에 음수가 있으면 true를 반환한다.', () => {
    expect(isNegativeNumber(-1000)).toBe(true);
    expect(isNegativeNumber([1, 2, -3, 4, 5, 6])).toBe(true);
  });

  test('입력값 또는 배열의 요소에 정수가 아닌 값이 있으면 true를 반환한다.', () => {
    expect(isIntegerNumber(1000.1)).toBe(true);
    expect(isIntegerNumber([1, 2, 3.5, 4, 5, 6])).toBe(true);
  });

  test('구매 금액은 1000 단위 정수가 아니면 예외가 발생한다.', () => {
    expect(() => Validator.isNotDivisible(1250)).toThrow(ERROR_MESSAGES.PRICE_NOT_DIVISIBLE);
  });

  test('입력 받은 번호의 갯수가 조건과 일치하지 않으면 예외가 발생한다. ', () => {
    expect(() => Validator.lengthIsNotEqual(5, 6)).toThrow(ERROR_MESSAGES.LENGTH_WINNING_NUMBERS);
    expect(() => Validator.lengthIsNotEqual(2, 1)).toThrow(ERROR_MESSAGES.LENGTH_BONUS_NUMBERS);
  });

  test('배열에 중복된 값이 있으면 예외가 발생한다. ', () => {
    expect(() => Validator.isDuplicated([1, 2, 3, 3, 4, 5])).toThrow(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
  });

  test('배열에 값이 이미 존재하면 예외가 발생한다. ', () => {
    expect(() => Validator.includedInArray([1, 2, 3, 4, 5, 6], 3)).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  });
});
