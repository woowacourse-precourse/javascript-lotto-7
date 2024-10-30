import { checkWinNumbers } from './validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    checkWinNumbers(numbers);
  }

  sortLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getlottoList() {
    this.sortLottoNumbers();
    return this.#numbers;
  }
}

export default Lotto;
