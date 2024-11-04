import { MissionUtils } from '@woowacourse/mission-utils';
import LottoGame from '../models/LottoGame.js';
import LottoView from '../views/LottoView.js';
import Validator from '../utils/Validator.js';

class LottoController {
  constructor() {
    this.lottoGame = new LottoGame();
    this.view = new LottoView(
      MissionUtils.Console.print,
      MissionUtils.Console.readLineAsync,
    );
  }

  async getCashWithRetry() {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const buyCash = await this.view.getCashInHand();
        Validator.cashValidation(buyCash);
        return buyCash;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getTargetLottoWithRetry() {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        return await this.view.getTargetLottoArray();
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getBonusNumberWithRetry(targetLotto) {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const bonusNumber = await this.view.getBonusNumber(targetLotto);
        return parseInt(bonusNumber, 10);
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async #processLottoPurchase() {
    const buyCash = await this.getCashWithRetry();
    const lottos = this.lottoGame.createLottos(buyCash);
    this.view.printLottoPurchase(lottos);
    return { buyCash, lottos };
  }

  async #processWinningNumbers() {
    const targetLotto = await this.getTargetLottoWithRetry();
    const bonusNumber = await this.getBonusNumberWithRetry(targetLotto);
    return { targetLotto, bonusNumber };
  }

  // eslint-disable-next-line class-methods-use-this
  #calculateResults(lottos, targetLotto, bonusNumber) {
    const winStatistics = LottoGame.getAllNumberWon(
      lottos,
      targetLotto,
      bonusNumber,
    );
    const getCash = LottoGame.getGetCash(winStatistics);
    return { winStatistics, getCash };
  }

  async play() {
    const { buyCash, lottos } = await this.#processLottoPurchase();
    const { targetLotto, bonusNumber } = await this.#processWinningNumbers();
    const { winStatistics, getCash } = this.#calculateResults(
      lottos,
      targetLotto,
      bonusNumber,
    );

    this.view.printWinningStatistics(winStatistics);
    this.view.printRateOfReturn(LottoGame.getRateOfReturn(buyCash, getCash));
  }
}

export default LottoController;
