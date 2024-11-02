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

  async play() {
    // eslint-disable-next-line no-useless-catch
    try {
      // 구매 금액 입력 및 로또 생성
      const buyCash = await this.view.getCashInHand();
      Validator.cashValidation(buyCash);

      const lottos = this.lottoGame.createLottos(buyCash);
      this.view.printLottoPurchase(lottos);

      // 당첨 번호 입력
      const targetLotto = await this.view.getTargetLottoArray();
      const bonusNumber = await this.view.getBonusNumber();

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
    } catch (error) {
      throw error;
    }
  }
}

export default LottoController;
