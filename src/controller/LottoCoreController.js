import OutputView from '../view/OutputView.js';
import LottoInputController from './LottoInputController.js';
import LottoProcessController from './LottoProcessController.js';

class LottoCoreController {
  async start() {
    const lottoCount = await LottoInputController.getLottoPurchasePrice();
    OutputView.printLottoPurchaseCount(lottoCount);

    const lottos = LottoProcessController.createAndPrintLottoIssuance(lottoCount);
    const winningNumbers = await LottoInputController.getWinningNumbers();
    const bonusNumber = await LottoInputController.getBonusNumber(winningNumbers);

    const matchResults = LottoProcessController.createAndPrintLottoStatistics(lottos, winningNumbers, bonusNumber);
    LottoProcessController.createAndPrintLottoRevenue(lottoCount, matchResults);
  }
}

export default LottoCoreController;
