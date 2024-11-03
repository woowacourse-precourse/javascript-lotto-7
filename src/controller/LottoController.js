import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import VendingMachine from '../model/VendingMachine.js';

class LottoController {
  async run() {
    const money = await this.#getPurchaseAmount();
    const winningNumbers = await this.#getWinningNumbers();
  }

  #getWinningNumbers() {
    const reader = Input.readWinningNumbers;
    const validator = LottoGame.validateWinningNumbers;

    return this.#getUserInput(reader, validator);
  }

  #getPurchaseAmount() {
    const reader = Input.readPurchaseAmount;
    const validator = VendingMachine.validateMoney;

    return this.#getUserInput(reader, validator);
  }

  /**
   * @template T
   * @param {() => Promise<T>} reader
   * @param {(input: T) => void} validator
   * @returns {Promise<T>}
   */
  async #getUserInput(reader, validator) {
    try {
      const input = await reader();

      validator(input);

      return input;
    } catch (error) {
      Console.print(error.message);

      return await this.#getUserInput(reader, validator);
    }
  }
}

export default LottoController;
