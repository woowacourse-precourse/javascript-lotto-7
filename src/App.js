import { Console } from '@woowacourse/mission-utils';
import { LOTTO, ERROR_MESSAGE } from './constants.js';
import LottoMachine from './LottoMachine.js';
import WinningNumber from './WinningNumber.js';
import LottoResult from './LottoResult.js';

class App {
  #lottos = [];
  #winningNumber;
  #lottoResult;
  #purchaseAmount;

  async run() {
    try {
      await this.#purchaseLottos();
      await this.#inputWinningNumbers();
      this.#calculateResults();
      this.#printResults();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async #purchaseLottos() {
    this.#purchaseAmount = await this.#getPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(this.#purchaseAmount);

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

  #printPurchaseResult() {
    Console.print('');
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
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
    const number = Number(input);

    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }

    return number;
  }

  #parseNumbers(input) {
    if (!input.includes(',')) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    }

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

  #calculateResults() {
    this.#lottoResult = new LottoResult(this.#purchaseAmount);

    this.#lottos.forEach((lotto) => {
      const matchCount = this.#countMatchingNumbers(lotto);
      const hasBonusMatch = this.#hasBonusMatch(lotto);
      this.#lottoResult.addResult(matchCount, hasBonusMatch);
    });
  }

  #countMatchingNumbers(lotto) {
    const winningNumbers = this.#winningNumber.getWinningNumbers();
    return lotto
      .getNumbers()
      .filter((number) => winningNumbers.includes(number)).length;
  }

  #hasBonusMatch(lotto) {
    const bonusNumber = this.#winningNumber.getBonusNumber();
    return lotto.getNumbers().includes(bonusNumber);
  }

  #printResults() {
    Console.print('\n당첨 통계');
    Console.print('---');

    for (const [message, count] of this.#lottoResult.getResults()) {
      Console.print(`${message} - ${count}개`);
    }

    const profitRate = this.#lottoResult.calculateProfitRate();
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
