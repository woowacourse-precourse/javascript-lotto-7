// Lotto 클래스는 입력된 값이 유효한 당첨번호인지 확인하는 클래스이다.
// 이 클래스를 통해 인스턴스를 만들 때 유효한 당첨번호가 주어지면
// private field인 #numbers에 값이 할당된다.
// #numbers의 값은 getter를 통해 외부에서 접근할 수 있다.

import { ERROR_MESSAGES } from "./Constants.js";

class Lotto {
  #numbers;

  constructor(winningNumbers) {
    this.#numbers = this.#validate(winningNumbers);
  }

  #validate(winningNumbers) {
    winningNumbers.forEach((number) => {
      const num = Number(number);
      if (num < 1 || num > 45 || !Number.isInteger(num)) {
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
      }
    });

    if (winningNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    }

    if (winningNumbers.length !== new Set([...winningNumbers]).size) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER);
    }

    return winningNumbers;
  }

  get winningNumbers() {
    return this.#numbers.map((number) => Number(number));
  }
}

export default Lotto;
