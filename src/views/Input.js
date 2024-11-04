import { Console } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT, WINNING_NUMBER, BONUS_NUMBER } from '../constants/input.js';

class Input {
  async getPurchaseAmount() {
    return await this.#getUserInput(PURCHASE_AMOUNT);
  }

  async getWinningNumber() {
    return await this.#getUserInput(WINNING_NUMBER);
  }

  async getBonusNumber() {
    return await this.#getUserInput(BONUS_NUMBER);
  }

  async #getUserInput(caption) {
    const input = await Console.readLineAsync(caption);
    return input;
  }
}

export default Input;
