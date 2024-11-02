import { CONSOLE_MESSAGE } from '../constant/message.js';
import { repeatUtilComplete } from '../util/input.js';

class Input {
  static getPurchaseAmount() {
    return repeatUtilComplete(CONSOLE_MESSAGE.purchaseAmountInput);
  }

  static getWinningNumbers() {
    return repeatUtilComplete(CONSOLE_MESSAGE.winningNumbersInput);
  }

  static getBonusNumber() {
    return repeatUtilComplete(CONSOLE_MESSAGE.bonusNumberInput);
  }
}

export default Input;
