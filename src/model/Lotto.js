import LottoValidator from "../validator/LottoValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.validate(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
