import Validator from '../controller/Validator.js';

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    Validator.checkLottoNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;

    Validator.checkBonusNumber(bonusNumber);
    Validator.checkBonusNumberDuplicate(winningNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumbers;
