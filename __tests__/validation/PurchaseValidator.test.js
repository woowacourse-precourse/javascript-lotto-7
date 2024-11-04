import PurchaseValidator from '../../src/validation/PurchaseValidator.js';
import { ERROR_MESSAGES, LOTTO } from '../../src/utils/constants.js';

describe('PurchaseValidator 클래스 테스트', () => {
  test('올바른 구입 금액을 입력했을 때 해당 값을 반환해야 한다.', () => {
    // given
    const purchaseAmout = '14000';

    // when
    const result = PurchaseValidator.validate(purchaseAmout);

    // then
    expect(result).toBe(14000);
  });

  test('구입 금액이 숫자가 아닐 때 예외 메시지를 출력하고 다시 입력을 요청한다.', () => {
    // given
    const invalidAmout = 'dk';

    // when...then
    expect(() => PurchaseValidator.validate(invalidAmout)).toThrow(
      ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT
    );
  });

  test('값을 입력할 때 화폐를 표기할 때 사용하는 ,는 허용한다.', () => {
    // given
    const amountWithComma = '12,000';

    // when
    const result = PurchaseValidator.validate(amountWithComma);

    // then
    expect(result).toBe(12000);
  });

  test('구입 금액이 0일 때 예외 메시지를 출력하고 다시 입력을 요청한다.', () => {
    // given
    const invalidAmout = '0';

    // when...then
    expect(() => PurchaseValidator.validate(invalidAmout)).toThrow(
      ERROR_MESSAGES.PURCHASE_AMOUNT_POSITIVE
    );
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않을 때 예외 메시지를 출력하고 다시 입력을 요청한다.', () => {
    // given
    const nonDivisibleAmount = '5500';

    // when...then
    expect(() => PurchaseValidator.validate(nonDivisibleAmount)).toThrow(
      ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY(LOTTO.TICKET_PRICE)
    );
  });
});
