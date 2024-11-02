import { CONTEXT } from '../constants/constants.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

class BonusNumberValidator {
  static context = CONTEXT.bonus;

  static validate(bonusNumber, winningNumbers) {
    this.#validateInteger(bonusNumber);
    this.#validateBonusNumberNotDuplicated(bonusNumber, winningNumbers);
  }

  static #validateInteger(number) {
    if (!Number.isInteger(number)) {
      throwError(ERROR_MESSAGES.invalid_number_type(this.context));
    }
  }

  static #validateBonusNumberNotDuplicated(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throwError(ERROR_MESSAGES.invalid_bonus_duplicate);
    }
  }
}

export default BonusNumberValidator;
