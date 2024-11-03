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

  checkBonusNumber(number) {
    return this.#numbers.includes(number);
  }

  checkCorrectCount(lotto) {
    const correctNumbers = this.#numbers.filter((number) => lotto.getNumbers().includes(number));

    return correctNumbers.length;
  }
}

export default Lotto;
