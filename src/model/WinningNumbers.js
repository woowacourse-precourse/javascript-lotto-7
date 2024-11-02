import Validator from '../controller/Validator.js';

class WinningNumbers {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    Validator.checkWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;

    Validator.checkBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return Number.parseInt(this.#bonusNumber);
  }
}

export default WinningNumbers;
