import Validator from '../../src/validator/Validator.js';
import { ERROR_MESSAGES } from '../../src/constants/messages.js';

describe('Validator', () => {
  describe('validatePurchaseAmount', () => {
    it('음수일 경우 예외가 발생해야 한다.', () => {
      expect(() => Validator.validatePurchaseAmount(-1000)).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
    });

    it('0일 경우 예외가 발생해야 한다.', () => {
      expect(() => Validator.validatePurchaseAmount(0)).toThrow(
        ERROR_MESSAGES.INVALID_NUMBER
      );
    });

    it('구매 단위와 일치하지 않을 경우 예외가 발생해야 한다.', () => {
      expect(() => Validator.validatePurchaseAmount(1500)).toThrow(
        ERROR_MESSAGES.INVALID_UNIT
      );
    });

    it('유효한 금액일 경우 예외가 발생하지 않아야 한다.', () => {
      expect(() => Validator.validatePurchaseAmount(2000)).not.toThrow();
    });
  });

  describe('validateLottoNumbers', () => {
    it('양수가 아닐 경우 예외가 발생해야 한다.', () => {
      expect(() =>
        Validator.validateLottoNumbers([-1, -2, -3, -4, -5, -6])
      ).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    it('길이가 잘못된 경우 예외가 발생해야 한다.', () => {
      expect(() => Validator.validateLottoNumbers([1, 2, 3, 4, 5])).toThrow(
        ERROR_MESSAGES.INVALID_COUNT
      );
    });

    it('범위를 초과한 번호일 경우 예외가 발생해야 한다.', () => {
      expect(() => Validator.validateLottoNumbers([1, 2, 3, 4, 5, 46])).toThrow(
        ERROR_MESSAGES.INVALID_WINNING_NUMBER
      );
    });

    it('중복된 번호가 있을 경우 예외가 발생해야 한다.', () => {
      expect(() => Validator.validateLottoNumbers([1, 2, 2, 4, 5, 6])).toThrow(
        ERROR_MESSAGES.DUPLICATED_WINNING_NUMBER
      );
    });

    it('유효한 로또 번호일 경우 예외가 발생하지 않아야 한다.', () => {
      expect(() =>
        Validator.validateLottoNumbers([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });
  });
  describe('validateBonusNumber', () => {
    const validWinningNumbers = [1, 2, 3, 4, 5, 6];

    it('잘못된 보너스 번호 개수일 경우 예외가 발생해야 한다.', () => {
      expect(() =>
        Validator.validateBonusNumber('1,2', validWinningNumbers)
      ).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_COUNT);
    });

    it('음수일 경우 예외가 발생해야 한다.', () => {
      expect(() =>
        Validator.validateBonusNumber('-1', validWinningNumbers)
      ).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
    });

    it('범위를 초과한 보너스 번호일 경우 예외가 발생해야 한다.', () => {
      expect(() =>
        Validator.validateBonusNumber('46', validWinningNumbers)
      ).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    });

    it('중복된 보너스 번호가 있을 경우 예외가 발생해야 한다.', () => {
      expect(() =>
        Validator.validateBonusNumber('2', validWinningNumbers)
      ).toThrow(ERROR_MESSAGES.DUPLICATED_BONUS_NUMBER);
    });

    it('유효한 보너스 번호일 경우 예외가 발생하지 않아야 한다.', () => {
      expect(() =>
        Validator.validateBonusNumber('7', validWinningNumbers)
      ).not.toThrow();
    });
  });
});
