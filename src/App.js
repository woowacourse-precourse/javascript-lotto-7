import { Console } from '@woowacourse/mission-utils';
import { LOTTO, ERROR_MESSAGE } from './constants.js';
import LottoMachine from './LottoMachine.js';

class App {
  #lottos = [];

  async run() {
    try {
      await this.#purchaseLottos();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #purchaseLottos() {
    const amount = await this.#getPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(amount);

    this.#lottos = LottoMachine.createLottos(lottoCount);
    this.#printPurchaseResult();
  }

  #printPurchaseResult() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return this.#validatePurchaseAmount(input);
  }

  #validatePurchaseAmount(input) {
    const amount = Number(input);

    if (Number.isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }

    if (amount % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }

    return amount;
  }

  #calculateLottoCount(amount) {
    return amount / LOTTO.PRICE;
  }
}

export default App;
