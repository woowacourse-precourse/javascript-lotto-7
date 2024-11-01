import Validator from '../Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class InputController {
  async getWinningNumbers() {
    try {
      const inputWinningNumbers = await InputView.getWinningNumbers();
      const winningNumbers = this.parseWinningNumbers(inputWinningNumbers);

      Validator.validateWinningNumbers(winningNumbers);

      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);

      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const inputBonusNumber = await InputView.getBonusNumber();
      const bonusNumber = Number(inputBonusNumber);

      Validator.validateBonusNumber(bonusNumber, winningNumbers);

      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);

      return this.getBonusNumber();
    }
  }

  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));

    return numbers;
  }
}

export default InputController;
