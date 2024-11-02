import Validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Lotto.#checkValidLength(numbers);
    numbers.forEach((num) => {
      Validator.checkValidRange(num, 1, 45, '로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
    Lotto.#checkDuplicateNum(numbers);
  }

  getNumbers() {
    return this.#numbers.map((num) => parseInt(num, 10));
  }

  static #checkDuplicateNum(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호는 중복된 숫자를 포함할 수 없습니다.');
    }
  }

  static #checkValidLength(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

export default Lotto;
