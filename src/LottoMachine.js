import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #payment;

  constructor(payment) {
    this.#payment = payment;
  }

  #calculateAmount() {
    const payment = this.#payment;
    return payment / 1000;
  }

  static #draw() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

export default LottoMachine;
