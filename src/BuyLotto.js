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

  #createRandomLottos() {
    for (let i = 0; i < this.#quantityOfLotto; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto.createLotto());
    }
  }

  #printLottos() {
    this.lottos.forEach((lotto) => Console.print(lotto));
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
