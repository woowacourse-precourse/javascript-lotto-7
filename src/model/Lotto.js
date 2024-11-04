import ERROR_MESSAGE from "../constants/error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUP);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUP);
    }
    // 숫자 범위 검증
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.WINNING_NUMBER_RANGE);
      }
    });
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
