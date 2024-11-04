import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

class InputView {
  static readPurchaseAmount() {
    return Console.readLineAsync(MESSAGE.INPUT_PURCHASE);
  }

  static readWinningNumbers() {
    return Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBER);
  }

  static readBonusNumber() {
    return Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
  }
}

export default InputView;
