import { Random } from '@woowacourse/mission-utils';
import BonusLotto from '../domain/BonusLotto.js';
import Lotto from '../domain/Lotto.js';
import Money from '../domain/Money.js';
import Rank from '../domain/Rank.js';
import Profit from '../domain/Profit.js';
import RankCounter from '../domain/RankCounter.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { MONEY_UNIT, LOTTO_BOUNDARY, LOTTO_RANK } from '../constants/lottoStandard.js';

class LottoController {
  async run() {
    const { lottoMoney, userLotto, winningLottoNumbers, winningLottoBonusNumber } =
      await this.#prepareLotto();

    const rankCounter = this.#playLotto(userLotto, winningLottoNumbers, winningLottoBonusNumber);

    this.#completeLotto(lottoMoney, rankCounter);
  }

  async #prepareLotto() {
    const { lottoMoney, userLotto } = await this.#generateUserLotto();
    const { winningLottoNumbers, winningLottoBonusNumber } = await this.#generateWinningLotto();

    return {
      lottoMoney,
      userLotto,
      winningLottoNumbers,
      winningLottoBonusNumber,
    };
  }

  #playLotto(userLotto, winningLottoNumbers, winningLottoBonusNumber) {
    const rankCounter = new RankCounter();
    userLotto.forEach((lotto) => {
      const rank = new Rank(
        winningLottoNumbers.getNumbers(),
        winningLottoBonusNumber.getBonusNumber(),
        lotto,
      );

      rankCounter.increaseRankCounter(rank.getRank());
    });
    return rankCounter.getRankCounterArray();
  }

  #completeLotto(lottoMoney, rankCounter) {
    const profit = new Profit(lottoMoney.getMoney(), rankCounter);
    OutputView.printLottoStatics(rankCounter, profit.getProfit());
  }

  async #generateUserLotto() {
    const lottoMoney = await this.#generateMoney();
    const lottoCount = this.#generateLottoCount(lottoMoney);
    const userLotto = this.#generateRandomLotto(lottoCount);
    return { lottoMoney, userLotto };
  }

  async #generateWinningLotto() {
    const winningLottoNumbers = await this.#generateWinningLottoNumbers();
    const winningLottoBonusNumber =
      await this.#generateWinningLottoBonusNumber(winningLottoNumbers);
    return { winningLottoNumbers, winningLottoBonusNumber };
  }

  async #retryOnErrorTemplate(callback) {
    while (true) {
      try {
        return await callback();
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async #generateMoney() {
    return this.#retryOnErrorTemplate(async () => {
      const inputMoney = await InputView.readMoney();
      return new Money(inputMoney);
    });
  }

  async #generateWinningLottoNumbers() {
    return this.#retryOnErrorTemplate(async () => {
      const winningNumbers = await InputView.readWinningNumbers();
      return new Lotto(winningNumbers.split(','));
    });
  }

  async #generateWinningLottoBonusNumber(winningLotto) {
    return this.#retryOnErrorTemplate(async () => {
      const bonusNumber = await InputView.readBonusNumber();
      return new BonusLotto(winningLotto.getNumbers(), bonusNumber);
    });
  }

  #generateLottoCount(lottoMoney) {
    const lottoCount = lottoMoney.getMoney() / MONEY_UNIT;
    OutputView.printLottoCounter(lottoCount);
    return lottoCount;
  }

  #generateRandomLotto(lottoCounter) {
    const lottoList = [];
    for (let i = 0; i < lottoCounter; i++) {
      const lotto = new Lotto(this.#selectRandomNumber());
      lottoList.push(lotto.getNumbers());
    }

    OutputView.printLottoNumbers(lottoList);
    return lottoList;
  }

  #selectRandomNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_BOUNDARY.MIN,
      LOTTO_BOUNDARY.MAX,
      LOTTO_RANK.SIXTH_RANK,
    );
  }
}

export default LottoController;
