import { END_NUMBER, START_NUMBER } from "./Constant.js";
import {
  LOTTO_ERROR_COUNT,
  LOTTO_ERROR_DUPLICATE,
  LOTTO_ERROR_NUMBER,
  LOTTO_ERROR_RANGE,
  BONUS_DUPLICATE,
} from "./Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_COUNT);
    }
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6) {
      throw new Error(LOTTO_ERROR_DUPLICATE);
    }
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(LOTTO_ERROR_NUMBER);
      }
      if (number > END_NUMBER || number < START_NUMBER) {
        throw new Error(LOTTO_ERROR_RANGE);
      }
    });
  }
  bonusErrorCheck(bonusNumber) {
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

  // TODO: 추가 기능 구현
}

export default Lotto;
