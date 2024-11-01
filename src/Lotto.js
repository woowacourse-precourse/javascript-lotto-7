import { ERROR, LOTTO } from "./util/constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR.INVALID_LOTTO_COUNT);
    };

    numbers.forEach((number) => {
      if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
        throw new Error(ERROR.INVALID_LOTTO_NUMBERS);
      };
    });

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATE_LOTTO_NUMBERS);
    };
  }

  // TODO: 추가 기능 구현
  // ascending order of the lotto numbers
  getNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  };
}

export default Lotto;
