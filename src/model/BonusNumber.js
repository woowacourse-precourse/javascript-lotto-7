import { ERROR_MESSAGE } from '../constants/messages.js';
import { parseNumbers } from '../utils/Parser.js';

class BonusNumber {
  constructor(bonusNumber) {
    this.#checkEmptyInput(bonusNumber);
    this.#checkNumberExceedsLimit(bonusNumber);
    this.#checkNumberRange(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  #checkEmptyInput(bonusNumberInput) {
    if (!bonusNumberInput || bonusNumberInput.trim() === '') {
      throw new Error(ERROR_MESSAGE.CHECK_EMPTY_INPUT);
    }
  }

  #checkNumberExceedsLimit(bonusNumberInput) {
    const bonusNumber = parseNumbers(bonusNumberInput);
    if (bonusNumber.length > 1) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_EXCEEDS_LIMIT);
    }
  }

  #checkNumberRange(bonusNumberInput) {
    if (
      !Number.isInteger(bonusNumberInput) ||
      bonusNumberInput < 1 ||
      bonusNumberInput > 45
    ) {
      throw new Error(ERROR_MESSAGE.NUMBER_RANGE);
    }
  }

  getBonusNumber() {
    return Number.parseInt(this.bonusNumber);
  }
}

export default BonusNumber;
