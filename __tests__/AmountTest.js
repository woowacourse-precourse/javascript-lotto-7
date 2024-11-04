import { validateAmount } from '../src/validate';
import { ERROR_MESSAGE } from '../src/constant';

describe('로또 구입 금액 유효성 테스트', () => {
  test('유효한 구입 금액을 입력한 경우', () => {
    expect(() => validateAmount(3000)).not.toThrow();
  });

  test('구입 금액이 숫자가 아닌 경우 예외 발생', () => {
    expect(() => validateAmount('asdf')).toThrow(ERROR_MESSAGE.NOT_NUM_ERROR);
  });

  test('구입 금액이 1000원 단위가 아닌 경우 예외 발생', () => {
    expect(() => validateAmount(1700)).toThrow(
      ERROR_MESSAGE.LOTTO_AMOUNT_UNIT_ERROR
    );
  });
});
