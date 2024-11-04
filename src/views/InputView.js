import MESSAGES from '../constants/Message.js';
import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async inputPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.INPUT.PURCHASE_AMOUNT);
  }
  static async inputWinningNumbers() {
    return await Console.readLineAsync(MESSAGES.INPUT.WINNING_NUMBERS);
  }
  static async inputBonusNumber() {
    return await Console.readLineAsync(MESSAGES.INPUT.BONUS_NUMBER);
  }
}

export default InputView;
