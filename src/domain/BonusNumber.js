import utils from '../utils/utils.js';
import MESSAGES from '../constants/messages.js';

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumberInput, winningNumbers) {
    this.#bonusNumber = Number(bonusNumberInput);
    this.#validate(bonusNumberInput, winningNumbers);
  }

  #validate(bonusNumberInput, winningNumbers) {
    utils.validateEmpty(bonusNumberInput);
    utils.validateNumber(bonusNumberInput);
    utils.validateSafeInteger(this.#bonusNumber);
    utils.validateRange(this.#bonusNumber);
    this.#validateDuplications(winningNumbers);
  }

  #validateDuplications(winningNumbers) {
    if (winningNumbers.includes(this.#bonusNumber)) {
      throw new Error(MESSAGES.duplications);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
