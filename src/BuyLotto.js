import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { AMOUNT } from './constants.js';
import {
  validateBuyAmountUnit,
  validateBuyAmountLength,
  validateBuyAmountType,
} from './validate.js';
import Lotto from './Lotto.js';

class BuyLotto {
  #quantityOfLotto;

  constructor(amount) {
    this.amount = amount;
    this.#validate(amount);
    this.lottos = [];
  }

  #validate(amount) {
    validateBuyAmountUnit(amount);
    validateBuyAmountLength(amount);
    validateBuyAmountType(amount);
  }

  #countQuantitiyOfLotto() {
    this.#quantityOfLotto = this.amount / AMOUNT.lottoAmount;
  }

  #createRandomLottos() {
    for (let i = 0; i < this.#quantityOfLotto; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto.createLotto());
    }
  }

  #printLottos() {
    this.lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  #printLottoQuantity() {
    Console.print(`${this.#quantityOfLotto}개를 구매했습니다.`);
  }

  async buyLotto() {
    this.#countQuantitiyOfLotto();
    this.#createRandomLottos();
    this.#printLottoQuantity();
    this.#printLottos();

    return this.lottos;
  }
}

export default BuyLotto;
