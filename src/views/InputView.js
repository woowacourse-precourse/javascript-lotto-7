import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/viewMessages.js';

class InputView {
  async readLottoAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    return parseInt(input, 10);
  }

  async readWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return parseInt(input, 10);
  }
}

export default InputView;
