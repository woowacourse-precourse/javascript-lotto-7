import { validateLottoNumberAmount } from "../validate.js"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort();
  }

  #validate(numbers) {
    validateLottoNumberAmount(numbers);
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
