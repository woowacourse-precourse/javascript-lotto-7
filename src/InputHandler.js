import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../Constants/Message.js';

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
  static async inputBonusNumbers() {
    return await Console.readLineAsync(
      `${PROGRESS_MESSAGE.ENTER_BONUSNUMBER}\n`
    );
  }
}

export default InputHandler;
