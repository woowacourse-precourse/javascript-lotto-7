import { Console } from '@woowacourse/mission-utils';
import { Exception } from '../Utils.js';

class Input {
  static async readPurchaseAmount() {
    const input = await Input.#readLine('구입금액을 입력해 주세요.');
    const amount = Input.#convertStringToNumber(input);

    return amount;
  }

  static async readWinningNumbers() {
    const input = await Input.#readLine('당첨 번호를 입력해 주세요.');
    const winningNumbers = input.split(',').map(Input.#convertStringToNumber);

    return winningNumbers;
  }

  static async readBonusNumber() {
    const input = await Input.#readLine('보너스 번호를 입력해 주세요.');
    const bonusNumber = Input.#convertStringToNumber(input);

    return bonusNumber;
  }

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
