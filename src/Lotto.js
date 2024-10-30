import { intersection } from './lib/utils.js';

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
  }

  getWinningCount(winningNumberArray) {
    return intersection(winningNumberArray, this.#numbers).length;
  }

  // getIsWinningBonus()

  // TODO: 추가 기능 구현
}

export default Lotto;
