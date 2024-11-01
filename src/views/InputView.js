import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/IOMessages.js';

class InputView {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.purchase_amount);

    return input;
  }

  static async getWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.winning_numbers);

    return input;
  }

  static async getBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.bonus_number);

    return input;
  }
}

export default InputView;
