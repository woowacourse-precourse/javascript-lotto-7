import { Random, Console } from '@woowacourse/mission-utils';
import { LOTTO_MACHINE } from './utils/Constants.js';
import inputView from './userInterface/InputView.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';

class LottoMachine {
  #payment;

  #lotto;

  constructor(payment, lotto) {
    this.#payment = payment;
    this.#lotto = lotto;
  }

  static async getPayment() {
    try {
      const payment = await this.#getPaymentInput();
      this.#validatePayment(payment);

      return payment;
    } catch (error) {
      Console.print(error.message);

      return this.getPayment();
    }
  }

  static async #getPaymentInput() {
    const payment = await inputView.askPayment();
    const parsedPayment = Utils.parsingToNumber(payment);
    return parsedPayment;
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

  static #validatePayment(payment) {
    Validation.checkPayment(payment);
  }
}

export default LottoMachine;
