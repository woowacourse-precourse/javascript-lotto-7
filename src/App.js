import { Random } from '@woowacourse/mission-utils';
import {
  DELIMITER,
  LOTTO_PRICE,
  FIRST_PRIZE_MONEY,
  SECOND_PRIZE_MONEY,
  THIRD_PRIZE_MONEY,
  FOURTH_PRIZE_MONEY,
  FIFTH_PRIZE_MONEY,
} from './constants/constants.js';
import { ERROR_MESSAGES } from './constants/messages.js';
import Lotto from './Model/Lotto.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  #result;

  constructor() {
    this.#result = [];
  }

  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const amount = await inputView.getAmount();
    this.validateAmount(amount);

    const lottoCount = amount / LOTTO_PRICE;
    const lottos = await this.buyLotto(lottoCount);

    await outputView.printBoughtLottos(lottoCount, lottos);

    const winningNumbers = await inputView.getWinningNumbers();
    const splittedWinningNumbers = winningNumbers
      .split(DELIMITER.trim())
      .map((number) => Number(number));

    const winningLotto = new Lotto(splittedWinningNumbers);
    const bonusNumber = await inputView.getBonusNumber();

    this.#result = this.getLottoMatchResults(lottos, winningLotto, bonusNumber);
    const prizeCount = this.prizeCountCalculate();
    const profitRate = this.calculateProfitRate(amount, prizeCount);

    await outputView.printResult(prizeCount, profitRate);
  }

  validateAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_AMOUNT);
    }
    if (!amount) {
      throw new Error(ERROR_MESSAGES.EMPTY_LOTTO_PRICE);
    }
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_PRICE);
    }
  }

  async pickLottoNumbers() {
    const lottoNumbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumbers;
  }

  async buyLotto(lottoCount) {
    let lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = await this.pickLottoNumbers();
      const sortedLotto = lottoNumbers.sort((a, b) => a - b);

      const lotto = new Lotto(sortedLotto);

      lottos.push(lotto);
    }
    return lottos;
  }

  getLottoMatchResults(lottos, winningLotto, bonusNumber) {
    const winningLottoNumbers = winningLotto.getLottoNumbers();
    const winningNumberSet = new Set(winningLottoNumbers);

    let result = [];

    for (let i = 0; i < lottos.length; i++) {
      const lottoNumbers = lottos[i].getLottoNumbers(); // [1,2,3,8,15,43]
      let matchCount = 0;
      let bonusMatchCount = 0;

      for (let j = 0; j < lottoNumbers.length; j++) {
        if (winningNumberSet.has(lottoNumbers[j])) {
          matchCount += 1;
        }

        if (bonusNumber === lottoNumbers[j]) {
          bonusMatchCount += 1;
        }
      }

      result.push({ matchCount: matchCount, bonusMatchCount: bonusMatchCount });
    }

    return result;
  }

  prizeCountCalculate() {
    const prizeCount = {
      firstPrizeCount: 0,
      secondPrizeCount: 0,
      thirdPrizeCount: 0,
      fourthPrizeCount: 0,
      fifthPrizeCount: 0,
    };

    this.#result.forEach(({ matchCount, bonusMatchCount }) => {
      if (matchCount + bonusMatchCount === 3) {
        prizeCount.fifthPrizeCount += 1;
      }

      if (matchCount + bonusMatchCount === 4) {
        prizeCount.fourthPrizeCount += 1;
      }

      if (matchCount + bonusMatchCount === 5) {
        prizeCount.thirdPrizeCount += 1;
      }

      if (matchCount === 5 && bonusMatchCount === 1) {
        prizeCount.secondPrizeCount += 1;
      }

      if (matchCount === 6) {
        prizeCount.firstPrizeCount += 1;
      }
    });
    return prizeCount;
  }

  calculateProfitRate(amount, prizeCount) {
    const {
      firstPrizeCount,
      secondPrizeCount,
      thirdPrizeCount,
      fourthPrizeCount,
      fifthPrizeCount,
    } = prizeCount;

    const prizeMoney =
      firstPrizeCount * FIRST_PRIZE_MONEY +
      secondPrizeCount * SECOND_PRIZE_MONEY +
      thirdPrizeCount * THIRD_PRIZE_MONEY +
      fourthPrizeCount * FOURTH_PRIZE_MONEY +
      fifthPrizeCount * FIFTH_PRIZE_MONEY;

    const profitRate = (prizeMoney / amount) * 100;

    if (!Number.isInteger(profitRate)) {
      return profitRate.toFixed(1);
    }

    return profitRate;
  }
}

export default App;
