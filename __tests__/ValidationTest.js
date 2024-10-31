import ERROR_MESSAGE from '../src/constants/ErrorMessage.js';
import validatePrice from '../src/utils/validation/validatePrice.js';

describe('validatePrice 함수 테스트', () => {
  test('입력받은 금액이 없으면 예외가 발생한다.', () => {
    expect(() => {
      validatePrice('');
    }).toThrow(ERROR_MESSAGE.LOTTO_PRICE);
  });

  test('입력받은 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validatePrice('2000b');
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_PRICE_NOT_NUMBER);
  });

  test('입력받은 금액이 1000보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      validatePrice('500');
    }).toThrow(ERROR_MESSAGE.INVALID_PRICE);
  });

  test('입력받은 금액이 1000으로 나눠떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      validatePrice('5500');
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_PRICE);
  });
});
