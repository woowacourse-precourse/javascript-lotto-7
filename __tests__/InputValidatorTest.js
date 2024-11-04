import InputValidator from '../src/utils/InputValidator.js';
import ERROR_MESSAGES from '../src/constants/errorMessages.js';

describe('InputValidator 유효성 검사', () => {
  describe('구입 금액 유효성 검사', () => {
    test('숫자 이외의 문자를 입력하면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('abc');
      }).toThrow(ERROR_MESSAGES.NON_NUMERIC_INPUT);
    });

    test('구입 금액이 1,000원 미만이면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount(500);
      }).toThrow(ERROR_MESSAGES.MINIMUM_AMOUNT);
    });

    test('구입 금액이 최대 안전 정수를 초과하면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount(Number.MAX_SAFE_INTEGER + 1);
      }).toThrow(ERROR_MESSAGES.MAXIMUM_AMOUNT);
    });

    test('구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount(2500);
      }).toThrow(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    });
  });

  describe('당첨 번호 유효성 검사', () => {
    test('당첨 번호의 길이가 6개가 아니면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 4, 5]);
      }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_LENGTH);
    });

    test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
    });

    test('당첨 번호에 1 ~ 45 외의 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 46, 5, 6]);
      }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBER_RANGE);
    });
  });

  describe('보너스 번호 유효성 검사', () => {
    test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateBonusNumber('abc', [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    });

    test('보너스 번호가 1 ~ 45 외의 숫자면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateBonusNumber(50, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    });

    test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
      expect(() => {
        InputValidator.validateBonusNumber(3, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    });
  });
});
