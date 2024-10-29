import { LOTTO_NUMBER_COUNT } from '../constants/constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
