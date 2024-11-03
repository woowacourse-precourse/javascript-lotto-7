import Validator from '../../src/utils/validator.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessage.js';

describe('Validator 클래스 테스트', () => {
  describe('validatePurchaseAmount 메서드', () => {
    test('양의 정수가 아닌 경우 예외를 발생시킨다.', () => {
      expect(() => Validator.validatePurchaseAmount(-1000)).toThrow(
        ERROR_MESSAGES.purchaseAmount.notPositiveInteger,
      );
      expect(() => Validator.validatePurchaseAmount(0)).toThrow(
        ERROR_MESSAGES.purchaseAmount.notPositiveInteger,
      );
      expect(() => Validator.validatePurchaseAmount('1000')).toThrow(
        ERROR_MESSAGES.purchaseAmount.notPositiveInteger,
      );
    });

    test('금액이 1000으로 나누어떨어지지 않으면 예외를 발생시킨다.', () => {
      expect(() => Validator.validatePurchaseAmount(1500)).toThrow(
        ERROR_MESSAGES.purchaseAmount.notDivisibleByThousand,
      );
    });

    test('유효한 금액일 때 예외가 발생하지 않는다.', () => {
      expect(() => Validator.validatePurchaseAmount(5000)).not.toThrow();
    });
  });

  describe('validateLottoNumbers 메서드', () => {
    test('배열이 아니거나 6개의 숫자가 아니면 예외를 발생시킨다.', () => {
      expect(() => Validator.validateLottoNumbers('1,2,3,4,5,6')).toThrow(
        ERROR_MESSAGES.lottoNumbers.invalidArray,
      );
      expect(() => Validator.validateLottoNumbers([1, 2, 3, 4, 5])).toThrow(
        ERROR_MESSAGES.lottoNumbers.invalidArray,
      );
    });

    test('중복된 숫자가 있으면 예외를 발생시킨다.', () => {
      expect(() => Validator.validateLottoNumbers([1, 2, 3, 4, 5, 5])).toThrow(
        ERROR_MESSAGES.lottoNumbers.duplicateNumbers,
      );
    });

    test('1~45 범위를 벗어나는 숫자가 있으면 예외를 발생시킨다.', () => {
      expect(() => Validator.validateLottoNumbers([0, 2, 3, 4, 5, 6])).toThrow(
        ERROR_MESSAGES.lottoNumbers.outOfRange,
      );
      expect(() => Validator.validateLottoNumbers([1, 2, 3, 4, 5, 46])).toThrow(
        ERROR_MESSAGES.lottoNumbers.outOfRange,
      );
    });

    test('유효한 로또 번호일 때 예외가 발생하지 않는다.', () => {
      expect(() =>
        Validator.validateLottoNumbers([1, 2, 3, 4, 5, 6]),
      ).not.toThrow();
    });
  });

  describe('validateBonusNumber 메서드', () => {
    test('보너스 번호가 1~45 범위를 벗어나면 예외를 발생시킨다.', () => {
      expect(() =>
        Validator.validateBonusNumber(0, [1, 2, 3, 4, 5, 6]),
      ).toThrow(ERROR_MESSAGES.bonusNumber.outOfRange);
      expect(() =>
        Validator.validateBonusNumber(46, [1, 2, 3, 4, 5, 6]),
      ).toThrow(ERROR_MESSAGES.bonusNumber.outOfRange);
    });

    test('보너스 번호가 로또 번호와 중복되면 예외를 발생시킨다.', () => {
      expect(() =>
        Validator.validateBonusNumber(6, [1, 2, 3, 4, 5, 6]),
      ).toThrow(ERROR_MESSAGES.bonusNumber.duplicateWithLotto);
    });

    test('유효한 보너스 번호일 때 예외가 발생하지 않는다.', () => {
      expect(() =>
        Validator.validateBonusNumber(7, [1, 2, 3, 4, 5, 6]),
      ).not.toThrow();
    });
  });
});
