import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/inputMessage.js';

export default class InputView {
  static price() {
    return Console.readLineAsync(INPUT_MESSAGE.PRICE);
  }

  static winningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  static bonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}
