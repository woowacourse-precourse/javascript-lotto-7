import Validate from "./Validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validate = new Validate();
    validate.validateLottoNumbers(numbers);
  }

  get value() {
    return this.#numbers;
  }
}

export default Lotto;
