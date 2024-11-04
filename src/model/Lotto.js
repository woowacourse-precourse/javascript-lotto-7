import {
  ERROR_MESSAGES,
  LOTTO_NUM_MAX,
  LOTTO_NUM_MIN,
  LOTTO_NUM_LENGTH,
} from '../constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((num) => {
      if (num < LOTTO_NUM_MIN || num > LOTTO_NUM_MAX)
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
      if (isNaN(num)) throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_TYPE);
      if (num % 1 !== 0)
        throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_INTEGER);
    });
    if (numbers.length !== LOTTO_NUM_LENGTH)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_LENGTH);
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_DUPLICATE);
  }
}

export default Lotto;
