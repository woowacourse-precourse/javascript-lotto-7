import { LOTTO_NUMBER_LENGTH } from './constant/system.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== LOTTO_NUMBER_LENGTH) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
