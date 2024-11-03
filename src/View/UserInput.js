import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/Message.js';

class UserInput {
  static async inputPurchaseAmount() {
    return await Console.readLineAsync(
      `${PROGRESS_MESSAGE.ENTER_PURCHASE_AMOUNT}\n`
    );
  }
  static async inputWinningNumbers() {
    return await Console.readLineAsync(
      `${PROGRESS_MESSAGE.ENTER_WINNING_NUMBERS}\n`
    );
  }
  static async inputBonusNumber() {
    return await Console.readLineAsync(
      `${PROGRESS_MESSAGE.ENTER_BONUS_NUMBER}\n`
    );
  }
}

export default UserInput;
