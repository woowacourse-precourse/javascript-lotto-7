import OutputView from '../view/OutputView.js';
import LottoIssuance from '../domain/LottoIssuance.js';
import LottoStatistics from '../domain/LottoStatistics.js';
import LottoRevenue from '../domain/LottoRevenue.js';
import InputController from './InputController.js';

class LottoController {
  async start() {
    const lottoCount = await InputController.getLottoPurchasePrice();
    OutputView.printLottoPurchaseCount(lottoCount);

    const lottoIssuance = new LottoIssuance(lottoCount);
    const lottos = lottoIssuance.getIssuedLottos();
    lottos.forEach((lotto) => OutputView.printLottoIssueDetails(lotto));

    const winningNumbers = await InputController.getWinningNumbers();
    const bonusNumber = await InputController.getBonusNumber(winningNumbers);

    const lottoStatistics = new LottoStatistics(lottos, winningNumbers, bonusNumber);
    const matchResults = lottoStatistics.getMatchResults();
    OutputView.printWinningDetails(matchResults);

    const lottoRevenue = new LottoRevenue(lottoCount, matchResults);
    const revenue = lottoRevenue.getRevenue();
    OutputView.printRevenue(revenue);
  }
}

export default LottoController;
