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

  setLotto(lotto) {
    this.#lottos = lotto;
  }

  setMoney(money) {
    this.#money = money;
  }

  setRankResult(result) {
    this.#rankResult = result;
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
      if (RANK_INFO <= LOTTO_CONSTANTS.rank) rankResult[RANK_INFO] += 1;
    });
    return rankResult;
  }

  getIncomeResult() {
    const INCOME_PERCENTAGE = this.calculateIncomePercentage();
    OutputView.printIncomeResult(INCOME_PERCENTAGE);
  }

  calculateIncomePercentage() {
    let income = 0;
    Object.keys(MONEY_BY_RANK).forEach(
      (rankIdx) =>
        (income += MONEY_BY_RANK[rankIdx] * this.#rankResult[rankIdx])
    );
    const INCOME_PERCENTAGE = (income / this.#money) * 100;

    return INCOME_PERCENTAGE.toFixed(1);
  }
}

export default App;
