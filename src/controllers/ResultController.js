import Validator from '../Validator.js';
import InputView from '../views/InputView.js';

class ResultController {
  #winningNumbers;

  async getWinningNumbers() {
    const inputWinningNumbers = await InputView.getWinningNumbers();
    const numbers = this.parseWinningNumbers(inputWinningNumbers);

    Validator.validateWinningNumbers(numbers);

    return numbers;
  }

  async getBonusNumber() {
    const inputBonusNumber = await InputView.getBonusNumber();
    return inputBonusNumber;
  }

  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));

    return numbers;
  }
}

export default ResultController;
