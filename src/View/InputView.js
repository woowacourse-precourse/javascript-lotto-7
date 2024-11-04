import { printOutput, readInput } from './utils/utils.js';

class InputView {
  constructor(inputValidator) {
    this.inputValidator = inputValidator;
  }

  async readInputWithValidation(validator, promptMessage) {
    const input = await readInput(promptMessage);
    const isValid = validator(input);

    if (isValid) {
      return input;
    }

    return this.readInputWithValidation(validator, promptMessage);
  }

  async readPurchaseAmount() {
    const purchaseAmountInput = await this.readInputWithValidation(input => {
      try {
        this.inputValidator.validatePurchaseAmount(input);
        return true;
      } catch (error) {
        printOutput(error.message);
        return false;
      }
    }, '구입금액을 입력해 주세요.\n');

    return Number(purchaseAmountInput);
  }

  async readWinningNumbers() {
    const winningNumbersInput = await this.readInputWithValidation(input => {
      const numbers = input.split(',').map(name => Number(name.trim()));
      try {
        this.inputValidator.validateWinningNumbers(numbers);
        return true;
      } catch (error) {
        printOutput(error.message);
        return false;
      }
    }, '당첨 번호를 입력해 주세요.\n');

    return winningNumbersInput.split(',').map(name => Number(name.trim()));
  }

  async readBonusNumber(winningNumbers) {
    const bonusNumberInput = await this.readInputWithValidation(input => {
      try {
        this.inputValidator.validateBonusNumber(winningNumbers, input);
        return true;
      } catch (error) {
        printOutput(error.message);
        return false;
      }
    }, '보너스 번호를 입력해 주세요.\n');

    return Number(bonusNumberInput);
  }
}

export default InputView;
