import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../Constants/Message.js';
import { basicValidation } from '../Validation.js';

class Input {
  async purchaseMoney() {
    const purchaseMoneyInput = await this.readLine(INPUT.purchaseMoney);
    return purchaseMoneyInput.trim();
  }

  async winningNumbers() {
    console.log();
    const winningNumbersInput = await this.readLine(INPUT.winningNumber);
    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    console.log();
    const bonusNumbersInput = await this.readLine(INPUT.bonusNumber);
    return bonusNumbersInput.trim();
  }

  async readLine(message) {
    const input = await Console.readLineAsync(message);
    basicValidation.validateInputBlank(input);
    return input;
  }
}
export default Input;
