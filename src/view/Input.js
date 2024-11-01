import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../Constants/Message.js';
import { BasicValidation } from '../Validation.js';

class Input {
  async purchaseMoney() {
    const purchaseMoneyInput = await this.readLine(INPUT.purchaseMoney);

    return purchaseMoneyInput.trim();
  }

  async winningNumbers() {
    const winningNumbersInput = await this.readLine(INPUT.winningNumber);

    return winningNumbersInput.trim();
  }

  async bonusNumbers() {
    const bonusNumbersInput = await this.readLine(INPUT.bonusNumber);

    return bonusNumbersInput.trim();
  }

  async readLine(message) {
    const input = await Console.readLineAsync(message);
    BasicValidation.InputBlank(input);
    return input;
  }
}
export default Input;
