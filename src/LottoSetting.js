import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, AMOUNT } from './constants.js';
import Lotto from './Lotto.js';

class BuyLotto {
  #quantityOfLotto;

  constructor() {
    this.lottos = [];
  }

  async #getPurchaseAmount() {
    return await Console.readLineAsync(INPUT_MESSAGES.lottoAmountInput + '\n');
  }

  #countQuantitiyOfLotto(amount) {
    this.#quantityOfLotto = amount / AMOUNT.lottoAmount;
  }

  #ascendinglottoNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }

  #createRandomLottos() {
    for (let i = 0; i < this.#quantityOfLotto; i += 1) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(this.#ascendinglottoNumber(lotto));
    }
  }

  #printLottos() {
    this.lottos.map((lotto) => Console.print(lotto));
  }

  #printLottoQuantity() {
    Console.print(`\n${this.#quantityOfLotto}개를 구매했습니다.`);
  }

  async buyLotto() {
    const amount = await this.#getPurchaseAmount();
    this.#countQuantitiyOfLotto(amount);
    this.#createRandomLottos();
    this.#printLottoQuantity();
    this.#printLottos();
    return this.lottos;
  }
}

export default BuyLotto;
