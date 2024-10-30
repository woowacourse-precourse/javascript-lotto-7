import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constant/input.js';

class Input {
  static async getPurchaseAmountInput() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);

    return input;
  }
}

export default Input;
