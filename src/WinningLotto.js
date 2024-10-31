import Validator from './Validator.js';

class WinningLotto {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    Validator.validateLottoNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;

    Validator.validateBonusLottoNumber(winningNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getWinnintNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
