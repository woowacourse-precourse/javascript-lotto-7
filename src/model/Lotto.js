import Validator from "../util/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validator = new Validator();
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.validator.isAnswerNumber(numbers);
    const intNumbers = this.validator.isAnswerValidCount(numbers);
    this.validator.isAnswerNotDuplicate(intNumbers);
    this.validator.isAnswerInRange(intNumbers);
  }
}

export default Lotto;
