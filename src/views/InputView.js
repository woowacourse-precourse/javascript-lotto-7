import { INPUT_MESSAGES } from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getPurchaseAmount() {
    return Console.readLineAsync(INPUT_MESSAGES.purchase_amount);
  }

  async getWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGES.winning_numbers);
  }

  async getBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGES.bonus_number);
  }
}

export default InputView;
