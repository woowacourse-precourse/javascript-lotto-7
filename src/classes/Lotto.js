import {
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
} from '../constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
    this.#validateNumber(numbers);
  }
  #validateLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO_LENGTH) {
      throw new Error('[ERROR] 로또 번호가 중복되었습니다.');
    }
  }

  #validateRange(numbers) {
    const isInvalid = numbers.some(
      (number) => number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER
    );
    if (isInvalid) {
      throw new Error('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
    }
  }

  #validateNumber(numbers) {
    const isInvalid = numbers.some((number) => isNaN(number));
    if (isInvalid) {
      throw new Error('[ERROR] 로또 번호는 양수여야 합니다.');
    }
  }

  get lottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
