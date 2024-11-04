import { LOTTO_PRICE } from '../src/constant/index.js';
import validatePurchaseAmount, { ERROR_MESSAGES } from '../src/validation/validate-purchase-amount.js';

describe('validatePurchaseAmount 함수 테스트', () => {
  test('구매 금액이 비어 있을 때 예외가 발생한다.', () => {
    expect(() => validatePurchaseAmount(null)).toThrow('구입 금액을 입력해주세요.');
  });

  test('유효하지 않은 숫자가 입력될 때 예외가 발생한다.', () => {
    expect(() => validatePurchaseAmount('abc')).toThrow('유효한 숫자를 입력해주세요.');
  });

  test('구매 금액이 로또 가격보다 적을 때 예외가 발생한다.', () => {
    expect(() => validatePurchaseAmount(500)).toThrow(`구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`);
  });

  test('구매 금액이 로또 가격의 배수가 아닐 때 예외가 발생한다.', () => {
    expect(() => validatePurchaseAmount(1500)).toThrow(`구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`);
  });

  test('유효한 구매 금액이 입력되면 예외가 발생하지 않는다.', () => {
    expect(() => validatePurchaseAmount(100000)).not.toThrow();
    expect(() => validatePurchaseAmount(2000)).not.toThrow();
  });
});
