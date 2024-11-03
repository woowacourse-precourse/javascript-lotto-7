import { Console, Random } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE } from './constants/message.js';
import { LOTTO } from './constants/lotto.js';
import Lotto from './Lotto.js';
import Validate from './Validate.js';
import Convert from './Convert.js';

class App {
  async run() {
    const amount = await this.safeAsyncExecute(this.userAmountInput.bind(this));
    const lottos = this.buyLottos(amount);
  }

  async userAmountInput() {
    const amountInput = await Console.readLineAsync(`${INPUT_MESSAGE.AMOUNT}\n`);
    const amount = this.convertToAmount(amountInput);

    return amount;
  }

  async safeAsyncExecute(callback) {
    try {
      return await callback();
    } catch (err) {
      Console.print(err.message);
      return this.safeAsyncExecute(callback);
    }
  }

  convertToAmount(amountInput) {
    this.#validateAmountInput(amountInput);

    const amount = Convert.toNumber(amountInput);

    return amount;
  }

  buyLottos(amount) {
    const lottoCount = amount / LOTTO.PRICE;

    this.#validateClearChange(lottoCount);
    this.#printBuyLottoCount(lottoCount);

    return Array.from({ length: lottoCount }, () => this.buyLotto());
  }

  buyLotto() {
    const lottoUniqueNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.BASIC_COUNT
    ).sort((a, b) => a - b);

    const lotto = new Lotto(lottoUniqueNumbers);

    return lotto;
  }

  #printBuyLottoCount(lottoCount) {
    const buyLottoCountMessage = this.#buyLottoCountMessage(lottoCount);

    Console.print(buyLottoCountMessage);
  }

  #buyLottoCountMessage(lottoCount) {
    return `\n${lottoCount}개를 구매했습니다.`;
  }

  #validateAmountInput(amountInput) {
    if (!Validate.number(amountInput)) throw new Error(ERROR_MESSAGE.AMOUNT_IS_NOT_NUMBER);
  }

  #validateClearChange(number) {
    if (!Validate.integer(number)) throw new Error(ERROR_MESSAGE.EXIST_CHANGE);
  }
}

export default App;
