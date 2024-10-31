import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/inputMessage.js';

export default class InputView {
  static async price() {
    return Console.readLineAsync(INPUT_MESSAGE.PRICE);
  }

  static async winningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.WINNIG_NUMBER);
  }

  static async bonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}
