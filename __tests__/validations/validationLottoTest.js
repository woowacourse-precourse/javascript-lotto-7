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
});
