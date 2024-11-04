import {
  LOTTO_NUMBER_COUNT,
  RANDOM_NUMBER_END,
  RANDOM_NUMBER_START,
} from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateIsNumber(numbers);
    this.#validateRange(numbers);
    this.#validateUnique(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 반드시 6개여야 합니다.');
    }
  }

  #validateIsNumber(numbers) {
    numbers.forEach(number => {
      const changeNumber = Number(number);
      if (Number.isNaN(changeNumber)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    });
  }

  #validateRange(numbers) {
    numbers.forEach(number => {
      if (number < RANDOM_NUMBER_START || number > RANDOM_NUMBER_END) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
      }
    });
  }

  #validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 로또 번호가 있습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
