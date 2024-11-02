import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';

class Input {
  static getPurchaseAmount() {
    return Console.readLineAsync(CONSOLE_MESSAGE.purchaseAmountInput);
  }

  static getWinningNumbers() {
    return Console.readLineAsync(CONSOLE_MESSAGE.winningNumbersInput);
  }
}

export default Input;
