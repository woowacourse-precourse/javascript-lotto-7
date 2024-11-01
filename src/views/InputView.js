import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputView {
  static async askPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT_PROMPT);
  }

  static async askWinningNumbers() {
    Console.print('');
    const input = await Console.readLineAsync(MESSAGES.WINNING_NUMBERS_PROMPT);
    return input
      .split(',')
      .map((num) => num.trim())
      .filter((num) => num); // 빈 문자열 제거
  }

  static async askBonusNumber() {
    Console.print('');
    return await Console.readLineAsync(MESSAGES.BONUS_NUMBER_PROMPT);
  }
}

export default InputView;
