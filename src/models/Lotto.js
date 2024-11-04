import Validation from "./Validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateLottoNumberLength(numbers);
    Validation.validateLottoNumberRange(numbers);
    Validation.validateLottoNumberDuplicate(numbers);
    Validation.validateLottoNumberType(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
