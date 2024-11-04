import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, AMOUNT } from './constants.js';
import Lotto from './Lotto.js';
import { validatePurchaseAmount, validateBuyAmount } from './validate.js';

class BuyLotto {
  #quantityOfLotto;

  constructor() {
    this.lottos = [];
  }

  #countQuantitiyOfLotto(amount) {
    this.#quantityOfLotto = amount / AMOUNT.lottoAmount;
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync(
      INPUT_MESSAGES.lottoAmountInput + '\n'
    );
    try {
      validatePurchaseAmount(input);
      validateBuyAmount(input);
      return Number(input);
    } catch (error) {
      Console.print(error.message);
      return this.getPurchaseAmount();
    }
  }

  #createRandomLottos() {
    for (let i = 0; i < this.#quantityOfLotto; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto.createLotto());
    }
  }

  #printLottos() {
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  #printLottoQuantity() {
    Console.print(`${this.#quantityOfLotto}개를 구매했습니다.`);
  }

  async buyLotto() {
    const purchasedAmount = await this.getPurchaseAmount();
    this.#countQuantitiyOfLotto(purchasedAmount);
    this.#createRandomLottos();
    this.#printLottoQuantity();
    this.#printLottos();
    return [this.lottos, purchasedAmount];
  }
}

export default BuyLotto;
