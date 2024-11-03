import ERROR_MESSAGE from '../constants/ErrorConstant.js';
import { WINNING_NUMBERS_DELIMITER } from '../constants/inputConstant.js';
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN, LOTTO_PRICE_UNIT, REQUIRED_WINNING_NUMBERS_COUNT } from '../constants/lottoConstant.js';
import ErrorHandler from './ErrorHandler.js';

class Validator {
  static validatePurchasePrice(inputPurchasePrice) {
    const purchasePrice = Number(inputPurchasePrice);

    if (Number.isNaN(purchasePrice)) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_NOT_A_NUMBER);
    }

    if (!Number.isInteger(purchasePrice)) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_NOT_INTEGER);
    }

    if (purchasePrice < 0) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_NEGATIVE);
    }

    if (purchasePrice === 0) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_ZERO);
    }

    if (purchasePrice % LOTTO_PRICE_UNIT !== 0) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_AMOUNT_UNTI_MESSAGE);
    }
  }

  static validateWinninNumbers(inputWinningNumbers) {
    const winningNumbers = inputWinningNumbers.split(WINNING_NUMBERS_DELIMITER).map(number => number.trim());

    if (!inputWinningNumbers.includes(WINNING_NUMBERS_DELIMITER)) {
      ErrorHandler.throwError(ERROR_MESSAGE.INVALID_WINNING_NUMBER_FORMAT);
    }

    if (winningNumbers.length !== REQUIRED_WINNING_NUMBERS_COUNT) {
      ErrorHandler.throwError(ERROR_MESSAGE.INVALID_WINNING_NUMBER_COUNT);
    }

    if (winningNumbers.some(number => Number.isNaN(Number(number)))) {
      ErrorHandler.throwError(ERROR_MESSAGE.WINNING_NUMBER_IS_NOT_A_NUMBER);
    }

    if (winningNumbers.some(number => Number(number) < LOTTO_NUMBER_MIN || Number(number) > LOTTO_NUMBER_MAX)) {
      ErrorHandler.throwError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
    }

    if (winningNumbers.some(number => !Number.isInteger(Number(number)))) {
      ErrorHandler.throwError(ERROR_MESSAGE.INVALID_WINNING_NUMBER_NOT_INTEGER);
    }
  }

  static validateBonusNumber(inputBonusNumber) {
    const bonusNumber = Number(inputBonusNumber);

    if (Number.isNaN(bonusNumber)) {
      ErrorHandler.throwError(ERROR_MESSAGE.BONUS_NUMBER_IS_NOT_A_NUMBER);
    }

    if (bonusNumber < LOTTO_NUMBER_MIN || bonusNumber > LOTTO_NUMBER_MAX) {
      ErrorHandler.throwError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
    }

    if (!Number.isInteger(bonusNumber)) {
      ErrorHandler.throwError(ERROR_MESSAGE.INVALID_BONUS_NUMBER_NOT_INTEGER);
    }
  }
}

export default Validator;
