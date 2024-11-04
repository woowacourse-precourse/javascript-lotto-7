import { Console } from '@woowacourse/mission-utils';
import { LOTTO, ERROR_MESSAGE } from './constants.js';

class App {
  async run() {
    try {
      const amount = await this.#getPurchaseAmount();
      const lottoCount = this.#calculateLottoCount(amount);
      Console.print(`${lottoCount}개를 구매했습니다.`);
    } catch (error) {
      Console.print(error.message);
    }
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
