import Validator from "../Validator/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateWinningNumberUnits(numbers);
    Validator.validateWinningNumberDuplicated(numbers);
    Validator.validateNotNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
