import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  static async readWinningNumbers() {
    return InputView.#readInput(INPUT_MESSAGE.LOTTO_WINNING_NUMBERS);
  }

  static async readBonusNumber() {
    return InputView.#readInput(INPUT_MESSAGE.LOTTO_BONUS_NUMBER);
  }

  static async readPurchaseAmount() {
    return InputView.#readInput(INPUT_MESSAGE.LOTTO_PURCHASE_AMOUNT);
  }

  static #readInput(input) {
    return Console.readLineAsync(input);
  }
}

export default InputView;
