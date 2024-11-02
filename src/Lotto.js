import { Random } from '@woowacourse/mission-utils';
import {
  LOTTO_MESSAGE,
  NUMBER_OF_LOTTO_NUMBERS,
  MIN_NUMBER,
  MAX_NUMBER,
} from './constants/constants.js';
class Lotto {
  #numbers;

  constructor(
    numbers = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUMBER_OF_LOTTO_NUMBERS,
    ),
  ) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_OF_LOTTO_NUMBERS) {
      throw new Error(LOTTO_MESSAGE.LOTTO_NUMBER_ERROR_MESSAGE);
    }
  }

  sortLottoNumbers() {
    this.#numbers.sort(function (a, b) {
      return a - b;
    });
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
