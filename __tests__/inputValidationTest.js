import { validateMoney } from '../src/utils/validation';
import { ERROR_MESSAGES } from '../src/constant/constants';

describe('로또 구입금액 입력 예외 테스트', () => {
  const NOT_A_NUMBER = '*';
  const INVALID_UNIT = 20;

  test.each([
    [NOT_A_NUMBER, ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER],
    [INVALID_UNIT, ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT],
  ])(
    '구입금액이 %s 인 경우 "%s" 라는 에러문을 출력한다.',
    async (money, ErrorMessage) => {
      await expect(() => validateMoney(money)).toThrow(ErrorMessage);
    },
  );
});
