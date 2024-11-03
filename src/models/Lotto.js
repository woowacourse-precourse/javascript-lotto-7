import { LottoNumberValidator } from "../validator/LottoNumberValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    LottoNumberValidator.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
