import { winningNumbersValidate } from "../modules/inputValidator.js";

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    winningNumbersValidate(numbers.join(","));
  }

  getNumbers() {
    return this.#numbers;
  }
}
