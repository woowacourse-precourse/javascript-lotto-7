import { Console } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT } from '../constants/input.js';

class Input {
  async getPurchaseAmount() {
    return await this.#getUserInput(PURCHASE_AMOUNT);
  }

  async #getUserInput(caption) {
    const input = await Console.readLineAsync(caption);
    return input;
  }
}

export default Input;
