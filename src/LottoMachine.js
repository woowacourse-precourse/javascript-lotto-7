import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #payment;

  #lotto;

  constructor(payment, lotto) {
    this.#payment = payment;
    this.#lotto = lotto;
  }

  #calculateAmount() {
    const payment = this.#payment;
    return payment / 1000;
  }

  static #draw() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  #issue(amount) {
    const tickets = Array.from({ length: amount });
    const issuedLottos = tickets.map(() => {
      const lotteryNumbers = LottoMachine.#draw();
      return this.#lotto(lotteryNumbers);
    });

    return issuedLottos;
  }
}

export default LottoMachine;
