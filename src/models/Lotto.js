import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor() {
    this.#pickNumbers();
  }

  getNumbers() {
    return this.#numbers;
  }

  #pickNumbers() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default Lotto;
