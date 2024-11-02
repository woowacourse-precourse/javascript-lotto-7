import { ERROR_MESSAGE, LOTTO } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.numberCount) {
      throw new Error(ERROR_MESSAGE.lotto.number);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
