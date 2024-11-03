import { Console } from '@woowacourse/mission-utils';
import { Exception } from '../Utils.js';

class Input {
  static async readPurchaseAmount() {
    const input = await Input.#readLine('구입금액을 입력해 주세요.');
    const amount = Input.#convertStringToNumber(input);

    return amount;
  }

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

  /** @param {string} value */
  static #convertStringToNumber(value) {
    return Number(value.trim());
  }
}

export default Input;
