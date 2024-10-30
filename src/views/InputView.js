import INPUT_MESSAGES from '../constants/inputConstants.js';
import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async getPurchaseAmount() {
    return Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
  }

  static async getWinningNumber() {
    return Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBER);
  }

  static async getBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
  }
}

export default InputView;
