import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

class InputView {
  static async readWinningNumbers() {
    return await InputView.#readInput(
      INPUT_MESSAGE.ENTER_LOTTO_WINNING_NUMBERS
    );
  }

  static #readInput(input) {
    return Console.readLineAsync(input);
  }
}

export default InputView;
