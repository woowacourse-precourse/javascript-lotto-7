import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers = Lotto.generateRandomNumbers()) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.');
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
      }
    });
  }

  static generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
