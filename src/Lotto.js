import { END_NUMBER, NUMBER_COUNT, START_NUMBER, ZERO } from "./Constant.js";
import {
  LOTTO_ERROR_COUNT,
  LOTTO_ERROR_DUPLICATE,
  LOTTO_ERROR_NUMBER,
  LOTTO_ERROR_RANGE,
  LOTTO_ERROR_INTEGER,
  BONUS_DUPLICATE,
} from "./Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_COUNT) {
      throw new Error(LOTTO_ERROR_COUNT);
    }

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== NUMBER_COUNT) {
      throw new Error(LOTTO_ERROR_DUPLICATE);
    }
    this.isValidNumbers(numbers);
  }

  isValidNumbers(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(LOTTO_ERROR_NUMBER);
      }
      if (number > END_NUMBER || number < START_NUMBER) {
        throw new Error(LOTTO_ERROR_RANGE);
      }
      if (number % 1 !== ZERO) {
        throw new Error(LOTTO_ERROR_INTEGER);
      }
    });
  }

  bonusDuplicateCheck(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(BONUS_DUPLICATE);
    }
  }
  equalWinning(lotto) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (lotto.equalCheck(number)) {
        count += 1;
      }
    });

    return count;
  }
  equalCheck(inputNumber) {
    return this.#numbers.some((number) => number == inputNumber);
  }
}

export default Lotto;
