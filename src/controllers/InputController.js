import Validator from '../Validator.js';
import InputView from '../views/InputView.js';

class InputController {
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

export default InputController;
