import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../Lotto.js';
import { calculateLottoStatistics } from '../utils/calculateLottoStatistics.js';
import {
  calculateProfitRate,
  calculateTotalPrize,
} from '../utils/calculateLottoPrizes.js';

class LottoController {
  #inputView;

  #outputView;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottos = [];
  }

  async play() {
    try {
      const amount = await this.#inputView.readLottoAmount();
      this.#lottos = this.#generateLottos(amount);
      this.#outputView.printLottos(amount, this.#lottos);

      this.#winningNumbers = await this.#inputView.readWinningNumbers();
      this.#bonusNumber = await this.#inputView.readBonusNumber();

      const matchResults = this.#getMatchResults();
      const statistics = calculateLottoStatistics(matchResults);
      this.#outputView.printMatchResults(statistics);

      const totalPrize = calculateTotalPrize(statistics);
      const profitRate = calculateProfitRate(totalPrize, amount);
      this.#outputView.printProfitRate(profitRate);
    } catch (error) {
      Console.print(error);
    }
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / 1000);
    return Array.from({ length: lottoCount }, () => this.#createLotto());
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  #getMatchResults() {
    return this.#lottos.map((lotto) => ({
      matchCount: lotto.countMatchingNumbers(this.#winningNumbers),
      hasBonus: lotto.containsBonusNumber(this.#bonusNumber),
    }));
  }
}

export default LottoController;
