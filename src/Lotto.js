import { MIN_RANGE, MAX_RANGE, LOTTO_NUMBERS_COUNT } from "./Static/const.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(
        `[ERROR] 로또 번호는 ${LOTTO_NUMBERS_COUNT}개여야 합니다.\n`
      );
    }

    for (let number of numbers) {
      if (number < MIN_RANGE || number > MAX_RANGE) {
        throw new Error(
          `[ERROR] 입력값은 ${MIN_RANGE}과 ${MAX_RANGE} 사이의 숫자여야 합니다.\n`
        );
      }
    }

    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length)
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.\n");
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
