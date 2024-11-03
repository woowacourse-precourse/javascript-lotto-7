import ERROR_MESSAGE from '../src/constants/ErrorMessage.js';
import validateBonus from '../src/utils/validation/validateBonus.js';
import validateLotto from '../src/utils/validation/validateLotto.js';
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
    }).toThrow(ERROR_MESSAGE.INVALID_NOT_NUMBER);
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

describe('validateLotto 함수 테스트', () => {
  test('입력받은 로또 번호가 없으면 예외가 발생한다.', () => {
    expect(() => {
      validateLotto('');
    }).toThrow(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  });

  test('입력받은 로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateLotto([1, '2', '3s', 4, '5', '6']);
    }).toThrow(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  });

  test('입력받은 로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateLotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
  });

  test('입력받은 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      validateLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
  });

  test('입력받은 로또 번호의 범위가 1 ~ 45가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateLotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
  });
});

describe('validateBonus 함수 테스트', () => {
  test('입력받은 보너스 번호가 없으면 예외가 발생한다.', () => {
    expect(() => {
      validateBonus('', [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  });

  test('입력받은 보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateBonus('dd', [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  });

  test('입력받은 보너스 번호의 범위가 1 ~ 45가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validateBonus(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.INVALID_WINNING_BONUS_NUMBER);
  });

  test('입력받은 보너스 번호는 로또 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      validateBonus(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBERS);
  });
});
