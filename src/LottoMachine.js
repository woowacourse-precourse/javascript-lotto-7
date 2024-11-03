import { Random } from '@woowacourse/mission-utils';
import { LOTTO_MACHINE } from './utils/Constants.js';
import Validation from './Validation.js';

class LottoMachine {
  #payment;

  #lotto;

  constructor(payment, lotto) {
    this.#validate(payment);
    this.#payment = payment;
    this.#lotto = lotto;
  }

  #calculateAmount() {
    const payment = this.#payment;
    return payment / LOTTO_MACHINE.unitPrice;
  }

  static #draw() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_MACHINE.minimumNumber,
      LOTTO_MACHINE.maximumNumber,
      LOTTO_MACHINE.drawNumbers,
    );
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

  static constructLottoMachine(payment, lotto) {
    const lottoMachine = new LottoMachine(payment, lotto);
    return lottoMachine;
  }

  #validate(payment) {
    Validation.checkPayment(payment);
  }
}

export default LottoMachine;
