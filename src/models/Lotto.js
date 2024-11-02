import errorMessages from "../constants/errorMessages.js";
import Validator from "../utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateNumsLength(numbers);
    Validator.validateNumsInRange(numbers);
    Validator.validateNumsDuplicate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
