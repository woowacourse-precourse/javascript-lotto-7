import WinningLotto from '../models/WinningLotto.js';
import Validator from '../Validator.js';
import InputView from '../views/InputView.js';

class ResultController {
  #winningNumbers;

  #lottos;

  async setWinningNumbers() {
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    this.#winningNumbers = new WinningLotto(winningNumbers, bonusNumber);
  }

  async getWinningNumbers() {
    const inputWinningNumbers = await InputView.getWinningNumbers();
    const winningNumbers = this.parseWinningNumbers(inputWinningNumbers);

    Validator.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const inputBonusNumber = await InputView.getBonusNumber();
    const bonusNumber = Number(inputBonusNumber);

    Validator.validateBonusNumber(bonusNumber, winningNumbers);

    return bonusNumber;
  }

  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));

    return numbers;
  }
}

export default ResultController;
