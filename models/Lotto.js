import { Console } from "@woowacourse/mission-utils";
import { winningNumbersValidate } from "../modules/inputValidator.js";

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    try {
      winningNumbersValidate(numbers.join(","));
    } catch {
      Console.print("로또 번호 생성 중 문제가 발생했습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}
