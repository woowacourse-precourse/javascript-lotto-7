import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from './Message.js';

class InputHandler {
  static async inputPurchaseAmount() {
    return await Console.readLineAsync(
      `${PROGRESS_MESSAGE.ENTER_PURCHASE_AMOUNT}\n`
    );
  }
  static async inputWinningNumbers() {
    return await Console.readLineAsync(
      `${PROGRESS_MESSAGE.ENTER_WINNER_NUMBERS}\n`
    );
  }
}

export default InputHandler;
