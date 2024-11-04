import { ERROR_MESSAGES } from '../../src/constants/errorMessage.js';

describe('LOTTO_CONFIG 상수를 참조하는 ERROR_MESSAGES 테스트', () => {
  test('OUT_OF_RANGE 메시지가 LOTTO_CONFIG 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage =
      '[ERROR] 로또 번호 범위(1 ~ 45)를 벗어난 숫자가 있습니다.';
    expect(ERROR_MESSAGES.OUT_OF_RANGE).toBe(expectedMessage);
  });

  test('INVALID_PRICE 메시지가 LOTTO_CONFIG 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage = '[ERROR] 구입 금액이 1000원 단위가 아닙니다.';
    expect(ERROR_MESSAGES.INVALID_PRICE).toBe(expectedMessage);
  });

  test('INVALID_LOTTO_COUNT 메시지가 LOTTO_CONFIG 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage = '[ERROR] 로또 번호는 6개여야 합니다.';
    expect(ERROR_MESSAGES.INVALID_LOTTO_COUNT).toBe(expectedMessage);
  });
});
