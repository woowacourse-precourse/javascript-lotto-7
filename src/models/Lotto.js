import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  }

  // eslint-disable-next-line class-methods-use-this
  #validate(numbers) {
    Validator.printedLottoValidation(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}
export default Lotto;
