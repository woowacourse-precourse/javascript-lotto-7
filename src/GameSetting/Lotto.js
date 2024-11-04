import Validation from "./Utils/Validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 1-45인지 검사
    for (let number of numbers) {
      Validation.numberRange(number);
    }

    // numbers 길이 검사
    Validation.numbersLength(numbers);

    // 중복성 검사
    Validation.numbersDuplicate(numbers);
  }

  getSortedLotto() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }
}

export default Lotto;
