import { ERROR_MESSAGE } from '../constants/messages.js';
import { parseNumbers } from '../utils/Parser.js';

class BonusNumber {
  constructor(bonusNumber) {
    this.#checkBonusNumberEmptyInput(bonusNumber);
    this.#checkBonusNumberCount(bonusNumber);
    this.#checkBonusNumberRange(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  #checkBonusNumberEmptyInput(bonusNumberInput) {
    if (!bonusNumberInput || bonusNumberInput.trim() === '') {
      throw new Error(ERROR_MESSAGE.INVALID_EMPTY_BONUS_NUMBER);
    }
  }

  #checkBonusNumberCount(bonusNumberInput) {
    const bonusNumber = parseNumbers(bonusNumberInput);
    if (bonusNumber.length > 1) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  }

  #checkBonusNumberRange(bonusNumberInput) {
    if (
      !Number.isInteger(bonusNumberInput) ||
      bonusNumberInput < 1 ||
      bonusNumberInput > 45
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  getBonusNumber() {
    return Number.parseInt(this.bonusNumber);
  }
}

export default BonusNumber;
