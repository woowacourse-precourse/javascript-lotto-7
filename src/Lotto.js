import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const validNumbers = this.#validate(numbers);
    this.#numbers = validNumbers;
  }

  #validate(numbers) {
    const vaildator = new Validator();
    vaildator.lottoNumbers(numbers);

    return numbers.sort((a, b) => a - b);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  print() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
