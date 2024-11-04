import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generateRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이여야 합니다.');
      }
    });
  }
}

export default Lotto;
