import { WINNING_NUMBERS_ERROR } from "./Message/Message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      // 로또 길이가 6이 아닌 경우
      throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_SIX_LENGTH);
    }

    numbers.forEach((num) => {
      const checkNum = Number(num);
      if (Number.isNaN(checkNum)) {
        throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_NUMBER);
      }

      if (!Number.isInteger(checkNum)) {
        throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_INTEGER);
      }

      if (checkNum < 1 || checkNum > 45) {
        throw new Error(WINNING_NUMBERS_ERROR.IS_NOT_RANGE);
      }
    });

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
