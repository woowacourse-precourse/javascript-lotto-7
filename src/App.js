import { Console } from '@woowacourse/mission-utils';
import { LOTTO, ERROR_MESSAGE } from './constants.js';
import LottoMachine from './LottoMachine.js';
import WinningNumber from './WinningNumber.js';

class App {
  #lottos = [];
  #winningNumber;

  async run() {
    try {
      await this.#purchaseLottos();
      await this.#inputWinningNumbers();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async #inputWinningNumbers() {
    const numbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber();

    this.#winningNumber = new WinningNumber(numbers, bonusNumber);
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return this.#parseNumbers(input);
  }

  async #getBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    return Number(input);
  }

  #parseNumbers(input) {
    return input
      .split(',')
      .map((num) => num.trim())
      .map((num) => {
        const number = Number(num);
        if (Number.isNaN(number)) {
          throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
        }
        return number;
      });
  }

  #printPurchaseResult() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  async #purchaseLottos() {
    const amount = await this.#getPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(amount);

    this.#lottos = LottoMachine.createLottos(lottoCount);
    this.#printPurchaseResult();
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
