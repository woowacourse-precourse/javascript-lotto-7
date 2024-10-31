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

  #issue() {
    const lotteryNumbers = LottoMachine.#draw();
    return new this.#lotto(lotteryNumbers);
  }

  #issuePurchasedAmount(amount) {
    const tickets = Array.from({ length: amount });
    const issuedLottos = tickets.map(() => this.#issue());
    return issuedLottos;
  }

  getLottos() {
    const amount = this.#calculateAmount();
    const issuedLottos = this.#issuePurchasedAmount(amount);
    return issuedLottos;
  }

  getAmount() {
    return this.#calculateAmount();
  }
}

export default LottoMachine;
