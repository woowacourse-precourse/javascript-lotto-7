import { BONUS_NUMBER_ERROR_MESSAGE } from '../constants/error.js';
import { GAME_RULES } from '../constants/gameRule.js';
import { throwError } from '../utils/console.js';

const validate = {
  validateEmpty(bonusNumber) {
    if (bonusNumber.trim() === "") {
      throwError(BONUS_NUMBER_ERROR_MESSAGE.EMPTY_INPUT);
    }
  },

  validateIsNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throwError(BONUS_NUMBER_ERROR_MESSAGE.INVALID_NUMBER);
    }
  },

  validatePositiveInteger(bonusNumber) {
    if (!Number.isInteger(bonusNumber) || bonusNumber <= 0) {
      throwError(BONUS_NUMBER_ERROR_MESSAGE.INVALID_POSITIVE_INTEGER);
    }
  },

  validateRange(bonusNumber) {
    if (bonusNumber < GAME_RULES.MIN_LOTTO_NUMBER || bonusNumber > GAME_RULES.MAX_LOTTO_NUMBER) {
      throwError(BONUS_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },

  validateDuplicate(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throwError(BONUS_NUMBER_ERROR_MESSAGE.DUPLICATE_NUMBER(winningNumbers));
    }
  },
};

function validateBonusNumber(bonusNumber, winningNumbers) {
  validate.validateEmpty(bonusNumber);
  const number = Number(bonusNumber);
  validate.validateIsNumber(number);
  validate.validatePositiveInteger(number);
  validate.validateRange(number);
  validate.validateDuplicate(number, winningNumbers);
}

export default validateBonusNumber;