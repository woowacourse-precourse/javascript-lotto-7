import {
  ERR_MSG_WINNING_NUMBERS_INVALID_LENGTH,
  ERR_MSG_WINNING_NUMBERS_INVALID_DUPLICATION,
  ERR_MSG_WINNING_NUMBERS_INVALID_RANGE
} from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 길이가 6이 아닐 때 예외 발생
    if (numbers.length !== 6) {
      throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_LENGTH);
    }
    // 번호가 1 ~ 45 범위 외일 때 예외 발생
    if (numbers.some(v => v < 1 || v > 45)) {
      throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_RANGE);
    }
    // 번호가 중복이 있을 때 예외 발생
    if (new Set(numbers).size !== 6) {
      throw new Error(ERR_MSG_WINNING_NUMBERS_INVALID_DUPLICATION);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
