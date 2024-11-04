import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { LOTTO_NUMBERS_CONDITION, LOTTO_SINGLE_TICKET_PRICE } from './constants.js';
import { validatePurchaseAmount } from './validate.js';

class LottoMachine {
  #purchaseAmount;
  #lottoCount;
  #lottos;

  constructor(purchaseAmount) {
    validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#lottos = [];
  }

  calculateLottoCount(purchaseAmount) {
    return purchaseAmount / LOTTO_SINGLE_TICKET_PRICE;
  }

  pickRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBERS_CONDITION.minNumber,
      LOTTO_NUMBERS_CONDITION.maxNumber,
      LOTTO_NUMBERS_CONDITION.count
    );
  }

  #sortASCNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  generateLottos(purchaseAmount) {
    this.#lottoCount = this.calculateLottoCount(purchaseAmount);

    for (let i = 0; i < this.#lottoCount; i += 1) {
      const numbers = this.pickRandomLottoNumbers();
      const lotto = new Lotto(this.#sortASCNumbers(numbers));

      this.#lottos.push(lotto);
    }
  }

  run() {
    this.generateLottos(this.#purchaseAmount);
  }

  get lottoCount() {
    return JSON.parse(JSON.stringify(this.#lottoCount));
  }

  get lottos() {
    return this.#lottos;
  }

  get purchaseAmount() {
    return JSON.parse(JSON.stringify(this.#purchaseAmount));
  }
}

export default LottoMachine;
