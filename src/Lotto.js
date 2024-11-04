import {
  LOTTO_LENGTH, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX, COMMA,
} from './constants/config.js';

import { LOTTO_LENGTH_ERROR_MESSAGE, DUPLICATE_NUMBER_ERROR_MESSAGE, NUMBER_OUT_OF_RANGE_ERROR_MESSAGE } from './constants/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(LOTTO_LENGTH_ERROR_MESSAGE);
    }

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== LOTTO_LENGTH) {
      throw new Error(DUPLICATE_NUMBER_ERROR_MESSAGE);
    }

    numbers.forEach((number) => {
      if (number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX) {
        throw new Error(NUMBER_OUT_OF_RANGE_ERROR_MESSAGE);
      }
    });
  }

  getFormattedNumbers() {
    return `[${String(this.#numbers).replaceAll(COMMA, `${COMMA} `)}]`;
  }

  getMatchResult(winningNumbers, bonusNumber) {
    const matchedCount = winningNumbers
      .filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
    const isBonusMatched = this.#numbers.includes(bonusNumber);
    return [matchedCount, isBonusMatched];
  }
}

export default Lotto;
