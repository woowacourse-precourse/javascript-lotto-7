import ERROR_MESSAGE from './constants/errorMessage.js';
import Validator from './Validator.js';

class BonusLotto {
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    Validator.validateLottoNumber(bonusNumber);
    this.#validateContainWinningNumber(winningNumbers, bonusNumber);
  }

  #validateContainWinningNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusLotto;
