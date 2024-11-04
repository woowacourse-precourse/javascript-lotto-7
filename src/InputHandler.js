import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, LOTTO_PRICE, ERROR_MESSAGE, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX } from './lottoConstants.js';
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

  async getBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    this.#validate.isEmpty(input);
    this.#validate.isNumber(input);
    this.#validate.isInteger(input);
    this.#validateNumberRange(input);
    this.#validateSingleNumber(input);

    return Number(input);
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

  #validateSingleNumber(bonusNumber) {
    const numbers = bonusNumber.split(',');
    if (numbers.length !== 1) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_COUNT);
    }
  }

  #validateNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_NUMBER_MIN || bonusNumber > LOTTO_NUMBER_MAX) {
      throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    }
  }
}

export default InputHandler
