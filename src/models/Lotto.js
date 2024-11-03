import { REQUIRED_WINNING_NUMBERS_COUNT } from '../constants/lottoConstant';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== REQUIRED_WINNING_NUMBERS_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호에는 중복된 숫자가 포함될 수 없습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
