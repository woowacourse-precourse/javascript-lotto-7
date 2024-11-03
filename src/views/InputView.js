import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/viewMessages.js';
import { NUMBER } from '../constants/lottoConstants.js';

class InputView {
  async readLottoAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    return parseInt(input, NUMBER.TEN);
  }

  async readWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return parseInt(input, NUMBER.TEN);
  }
}

export default InputView;
