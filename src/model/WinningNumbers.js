import Validator from '../controller/Validator.js';
import { parseNumbers } from '../utils/Parser.js';

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
    return parseNumbers(this.#winningNumbers);
  }

  getBonusNumber() {
    return Number.parseInt(this.#bonusNumber);
  }
}

export default WinningNumbers;
