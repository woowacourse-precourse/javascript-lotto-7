import { LOTTO, ERROR } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const uniqueWinningNumbers = new Set(numbers);
    if (uniqueWinningNumbers.size !== LOTTO.NUMBER_OF_SPACE) {
      throw new Error(ERROR.DUPLICATED_NUMBER_MESSAGE);
    }
  }

  getLottoNumber = () => this.#numbers;
}

export default Lotto;
