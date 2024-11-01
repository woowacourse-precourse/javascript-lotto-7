import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputView {
  static async askPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT_PROMPT);
  }

  static async askWinningNumbers() {
    Console.print('');
    return await Console.readLineAsync(MESSAGES.WINNING_NUMBERS_PROMPT);
  }

  static async askBonusNumber() {
    Console.print('');
    return await Console.readLineAsync(MESSAGES.BONUS_NUMBER_PROMPT);
  }
}

export default InputView;
