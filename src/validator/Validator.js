import { CONFIG } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import {
  isPositiveNumber,
  isUnique,
  isValidInRange,
  isValidLength,
  isValidPurchaseUnit,
} from '../utils/validationUtils.js';

const Validator = {
  validatePurchaseAmount(amount) {
    if (!isPositiveNumber(amount)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    if (!isValidPurchaseUnit(amount, CONFIG.PURCHASE_AMOUNT_UNIT)) {
      throw new Error(ERROR_MESSAGES.INVALID_UNIT);
    }
  },

  validateLottoNumbers(numbers) {
    if (!isValidLength(numbers, CONFIG.LOTTO_COUNT)) {
      throw new Error(ERROR_MESSAGES.INVALID_COUNT);
    }
    if (
      !isValidInRange(numbers, CONFIG.LOTTO_MIN_NUMBER, CONFIG.LOTTO_MAX_NUMBER)
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBER);
    }
    if (!isUnique(numbers)) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_WINNING_NUMBER);
    }
  },

  validateBonusNumber(bonusNumber, winningNumbers) {
    if (!isValidLength(bonusNumber.split(','), CONFIG.BONUS_NUMBER_COUNT)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_COUNT);
    }
    if (!isPositiveNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    if (
      !isValidInRange(
        bonusNumber,
        CONFIG.LOTTO_MIN_NUMBER,
        CONFIG.LOTTO_MAX_NUMBER
      )
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    if (!isUnique(Number(bonusNumber), winningNumbers)) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_BONUS_NUMBER);
    }
  },
};

export default Validator;
