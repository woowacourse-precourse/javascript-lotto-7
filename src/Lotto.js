import Validate from './Validate.js';
class Lotto {
  #numbers;
  constructor(numbers) {
    Validate.validateLottoNumbers(numbers);
    this.#numbers = numbers.sort((first, second) => first - second);
  }

  getNumbersWithSquareBrackets() {
    return `[${this.#numbers.join(', ')}]`;
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
