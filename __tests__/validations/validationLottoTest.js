import validationLotto from '../../src/validations/validationLotto.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessage.js';

describe('validationLotto 테스트', () => {
  describe('purchasePrice 함수', () => {
    test('구입 금액이 올바른 1000원 단위일 때 오류가 발생하지 않는지 테스트', () => {
      expect(() => validationLotto.purchasePrice('1000')).not.toThrow();
      expect(() => validationLotto.purchasePrice('10000')).not.toThrow();
    });

    test('구입 금액이 1000원 단위가 아닌 경우 오류를 발생시키는지 테스트', () => {
      expect(() => validationLotto.purchasePrice('1500')).toThrow(
        ERROR_MESSAGES.INVALID_PRICE
      );
      expect(() => validationLotto.purchasePrice('0')).toThrow(
        ERROR_MESSAGES.INVALID_PRICE
      );
    });
  });

  describe('winningNumbers 함수', () => {
    test('당첨 번호가 올바른 정수 문자열로 주어질 때 오류가 발생하지 않는지 테스트', () => {
      expect(() => validationLotto.winningNumbers('1,2,3,4,5,6')).not.toThrow();
    });

    test('당첨 번호에 숫자가 아닌 값이 포함되면 오류를 발생시키는지 테스트', () => {
      expect(() => validationLotto.winningNumbers(' ,2,3,4,5,6')).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
      expect(() => validationLotto.winningNumbers('-1,2,3,4,5,6')).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
      expect(() => validationLotto.winningNumbers('1.1,2,3,4,5,6')).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
      expect(() => validationLotto.winningNumbers('1e2,2,3,4,5,6')).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
      expect(() => validationLotto.winningNumbers('a,2,3,4,5,6')).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
    });
  });

  describe('bonusNumber 함수', () => {
    const winningLotto = { numbers: [1, 2, 3, 4, 5, 6] };

    test('보너스 번호가 올바른 범위 내에 있을 때 오류가 발생하지 않는지 테스트', () => {
      expect(() =>
        validationLotto.bonusNumber('7', winningLotto)
      ).not.toThrow();
    });

    test('보너스 번호가 범위를 벗어나면 오류를 발생시키는지 테스트', () => {
      expect(() => validationLotto.bonusNumber('0', winningLotto)).toThrow(
        ERROR_MESSAGES.OUT_OF_RANGE
      );
      expect(() => validationLotto.bonusNumber('46', winningLotto)).toThrow(
        ERROR_MESSAGES.OUT_OF_RANGE
      );
    });

    test('보너스 번호가 당첨 번호와 중복될 때 오류를 발생시키는지 테스트', () => {
      expect(() => validationLotto.bonusNumber('3', winningLotto)).toThrow(
        ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE
      );
    });
  });
});
