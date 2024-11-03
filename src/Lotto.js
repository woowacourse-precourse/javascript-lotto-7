import { validateLottoCount } from './Validator.js';
import { ERROR_MESSAGE } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLottoCount(numbers, ERROR_MESSAGE.NUMBERS_LENGHT_SIX);
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
