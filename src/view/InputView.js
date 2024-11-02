import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  static async readWinningNumbers() {
    return await InputView.#readInput(INPUT_MESSAGE.LOTTO_WINNING_NUMBERS);
  }

  static async readBonusNumber() {
    return await InputView.#readInput(INPUT_MESSAGE.LOTTO_BONUS_NUMBER);
  }

  static #readInput(input) {
    return Console.readLineAsync(input);
  }
}

export default InputView;
