import { validateMoney } from '../src/utils/validation';
import { ERROR_MESSAGES } from '../src/constant/constants';

describe('로또 구입금액 입력 예외 테스트', () => {
  test('로또 구입금액이 숫자가 아닌경우 예외가 발생한다.', () => {
    const money = '*';

    expect(() => validateMoney(money)).toThrow(
      ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER,
    );
  });

  test('로또 구입금액의 단위가 1000원이 아닌 경우 예외가 발생한다.', () => {
    const money = 20;

    expect(() => validateMoney(money)).toThrow(
      ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT,
    );
  });
});
