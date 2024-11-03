import { Console } from '@woowacourse/mission-utils';
import { Exception } from '../Utils.js';

class Input {
  static async readPurchaseAmount() {}

  static async readWinningNumbers() {}

  static async readBonusNumber() {}

  /** @param {string} message */
  static async #readLine(message) {
    /** @type {string} */
    const input = await Console.readLineAsync('\n' + message + '\n');

    if (!input.trim()) {
      throw new Exception(message);
    }

    return input;
  }
}

export default Input;
