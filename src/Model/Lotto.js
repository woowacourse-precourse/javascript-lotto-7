import { WINNING_NUMBERS_ERROR } from "../Message/Message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers.length);

    for (const num of numbers) {
      const checkNum = Number(num);
      this.#validateNum(checkNum);
    }

    this.#validateDuplicateNum(numbers);
  }

  #validateLength(length) {
    if (length !== 6) {
      // 로또 길이가 6이 아닌 경우
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_SIX_LENGTH);
    }
  }

  #validateNum(checkNum) {
    this.#checkIsNumber(checkNum);
    this.#checkisInteger(checkNum);
    this.#checkIsRange(checkNum);
  }

  #checkIsNumber(num) {
    if (Number.isNaN(num)) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_NUMBER);
    }
  }

  #checkisInteger(num) {
    if (!Number.isInteger(num)) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_INTEGER);
    }
  }

  #checkIsRange(num) {
    if (num < 1 || num > 45) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_RANGE);
    }
  }

  #validateDuplicateNum(numbers) {
    const numSet = new Set(numbers);
    if (numSet.size !== numbers.length) {
      throw new Error(WINNING_NUMBERS_ERROR.IS_DUPLICATE_NUMBER);
    }
  }

  getLotto() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
