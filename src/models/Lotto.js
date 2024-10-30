import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
} from '../constants/constants.js';

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

    numbers.forEach((number) => {
      if (number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX) {
        throw new Error(
          '[ERROR] 로또 번호 범위(1 ~ 45)를 벗어난 숫자가 있습니다.'
        );
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
