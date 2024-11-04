import { ERROR_MESSAGE } from './constants.js';
import { throwError } from './utils/throwError.js';
import { validateWinningNumbers, validateBonusNumber } from './validate.js';

class WinningNumbers {
  #numbers;
  #bonusNumber;

  constructor(winningNumbers) {
    validateWinningNumbers(winningNumbers);
    this.#numbers = winningNumbers.map(Number);
    this.#bonusNumber = null;
  }

  set bonusNumber(bonusNumber) {
    if (this.#bonusNumber) throwError(ERROR_MESSAGE.immutableFieldError);
    validateBonusNumber(bonusNumber, this.#numbers);
    this.#bonusNumber = +bonusNumber;
  }

  get bonusNumber() {
    return JSON.parse(JSON.stringify(this.#bonusNumber));
  }
}

export default WinningNumbers;
