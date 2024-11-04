import { handleError, isEmptyOrNull, isIntegerNumber, isInvalidNumber, isNegativeNumber } from '../src/utils/index.js';

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
});
