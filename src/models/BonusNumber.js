import LOTTO_CONSTANTS from '../constants/lottoConstatns.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';

class BounsNumber {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    this.#validateType(bonusNumber);
    this.#validateDuplication(bonusNumber);
    this.#validateRange(bonusNumber);
    this.#validateInteger(bonusNumber);
  }

  #validateType(bonusNumber) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.BONUS_NUMBER_TYPE_NOT_NUMBER}`,
      );
    }
  }

  #validateDuplication(bonusNumber) {
    if (this.#winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.BONUS_NUMBER_DUPLICATION}`);
    }
  }

  #validateRange(bonusNumber) {
    const isValid =
      Number(bonusNumber) > LOTTO_CONSTANTS.END_NUMBER ||
      Number(bonusNumber) < LOTTO_CONSTANTS.START_NUMBER;

    if (isValid) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.BONUS_NUMBER_RANGE_NOT_RIGHT}`,
      );
    }
  }

  #validateInteger(bonusNumber) {
    if (Number(bonusNumber) !== parseInt(bonusNumber, 10)) {
      throw new Error(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.BONUS_NUMBER_NOT_INTEGER}`);
    }
  }
}

export default BounsNumber;
