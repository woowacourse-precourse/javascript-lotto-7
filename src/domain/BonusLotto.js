import ERROR_MESSAGE from '../constants/errorMessage.js';
import CustomError from '../CustomError.js';
import LottoNumberValidator from '../LottoNumberValidator.js';

class BonusLotto {
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  #validate(winningNumbers, bonusNumber) {
    LottoNumberValidator.validateLottoNumber(bonusNumber);
    this.#validateContainWinningNumber(winningNumbers, bonusNumber);
  }

  #validateContainWinningNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new CustomError(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusLotto;
