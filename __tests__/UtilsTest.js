import { handleError, isDivisible, isEmptyOrNull, isNegative } from '../src/utils/index.js';

describe('유틸 함수', () => {
  test('handleError의 condition이 true이면 예외가 발생한다. ', () => {
    const message = '[ERROR]';

    expect(() => handleError(true, message)).toThrow(message);
  });

  test('구매 금액이 입력되지 않으면 true를 반환한다.', () => {
    expect(isEmptyOrNull()).toBe(true);
  });

  test('구매 금액은 1000 단위 정수가 아니면 false를 반환한다.', () => {
    expect(isDivisible(1250)).toBe(false);
  });

  test('구매 금액이 음수이면 true를 반환한다.', () => {
    expect(isNegative(-1000)).toBe(true);
  });
});
