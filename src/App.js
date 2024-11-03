import InputView from './InputView.js';
import Lotto from './Lotto.js';
import OutputView from './OutputView.js';
import { LOTTO_CONSTANTS } from './util/constant.js';
import { pickUniqueNumbersInRange } from './util/missionUtil.js';

const MONEY_BY_RANK = Object.freeze({
  5: 5000,
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000,
});

class App {
  #lottos;
  #money;
  winNumbers;
  bonusNumber;
  #rankResult;

  async run() {
    this.#money = await InputView.processMoney();
    OutputView.printLottoCount(this.#money);
    this.#lottos = await this.createLottos();
    OutputView.printLottoNumbers(this.#lottos);
    this.winNumbers = await InputView.processWinningNumber();
    this.bonusNumber = await InputView.processBonusNumber(this.winNumbers);
    this.#rankResult = await this.getRankResult();
    await OutputView.printRankResult(this.#rankResult);
    this.getIncomeResult();
  }

  async createLottos() {
    const lottoCount = this.#money / LOTTO_CONSTANTS.price;

    const lottoNumberPromises = Array.from({ length: lottoCount }, async () => {
      const randomNumber = await this.getSortedRandomNumber();
      return new Lotto(randomNumber);
    });
    const lottoNumbers = await Promise.all(lottoNumberPromises);
    return lottoNumbers;
  }

  async getSortedRandomNumber() {
    const randomNumber = await pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.minLottoNumber,
      LOTTO_CONSTANTS.maxLottoNumber,
      LOTTO_CONSTANTS.length
    );
    return randomNumber.sort((a, b) => a - b);
  }

  getRankResult() {
    const rankResult = Array.from({ length: 6 }, () => 0);
    this.#lottos.forEach((lotto) => {
      const RANK_INFO = lotto.getRankResult(this.winNumbers, this.bonusNumber);
      rankResult[RANK_INFO] += 1;
    });
    return rankResult;
  }

  getIncomeResult() {
    const INCOME = this.calculateIncome();
    const INCOME_PERCENTAGE = (INCOME / this.#money) * 100;
    OutputView.printIncomeResult(INCOME_PERCENTAGE.toFixed(1));
  }

  calculateIncome() {
    let income = 0;
    Object.keys(MONEY_BY_RANK).forEach(
      (rankIdx) =>
        (income += MONEY_BY_RANK[rankIdx] * this.#rankResult[rankIdx])
    );
    return income;
  }
}

export default App;
