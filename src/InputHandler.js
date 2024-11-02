import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, LOTTO_PRICE, ERROR_MESSAGE } from './lottoConstants.js';
import Validate from './Validate.js';

class InputHandler {
  #validate

  constructor() {
    this.#validate = new Validate();
  }

  async getAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
    this.#validate.isEmpty(input);
    this.#validate.isNumber(input);
    this.#validate.isInteger(input);
    this.#validateAmount(input);
    this.#validatePositiveAmount(input);

    return Number(input);
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    this.#validate.isEmpty(input);

    const inputNumbers = input.split(',');
    inputNumbers.forEach(number => {
      this.#validate.isNumber(number);
      this.#validate.isInteger(number);
    });

    return inputNumbers.map(number => Number(number));
  }

  #validateAmount(amount) {
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_AMOUNT);
    }
  }

  #validatePositiveAmount(amount) {
    if (amount <= 0) {
      throw new Error(ERROR_MESSAGE.NON_POSITIVE_AMOUNT);
    }
  }
}

export default InputHandler
