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

  async play() {
    // 구매 금액 입력 및 로또 생성
    const buyCash = await this.getCashWithRetry();
    const lottos = this.lottoGame.createLottos(buyCash);
    this.view.printLottoPurchase(lottos);

    // 당첨 번호 입력
    const targetLotto = await this.getTargetLottoWithRetry();
    const bonusNumber = await this.getBonusNumberWithRetry(targetLotto);

    // 당첨 계산
    const winStatistics = LottoGame.getAllNumberWon(
      lottos,
      targetLotto,
      bonusNumber,
    );
    this.view.printWinningStatistics(winStatistics);

    // 수익률 계산
    const getCash = LottoGame.getGetCash(winStatistics);
    const rateOfReturn = LottoGame.getRateOfReturn(buyCash, getCash);
    this.view.printRateOfReturn(rateOfReturn);
  }
}

export default LottoController;
