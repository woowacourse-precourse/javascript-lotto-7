import { LOTTO_MESSAGE, NUMBER_OF_LOTTO_NUMBERS } from './constants/constants';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_OF_LOTTO_NUMBERS) {
      throw new Error(LOTTO_MESSAGE.LOTTO_NUMBER_ERROR_MESSAGE);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
