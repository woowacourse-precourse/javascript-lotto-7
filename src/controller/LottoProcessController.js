import LottoIssuance from '../domain/LottoIssuance.js';
import LottoStatistics from '../domain/LottoStatistics.js';
import LottoRevenue from '../domain/LottoRevenue.js';
import OutputView from '../view/OutputView.js';

class LottoProcessController {
  static createAndPrintLottoIssuance(lottoCount) {
    const lottoIssuance = new LottoIssuance(lottoCount);
    const lottos = lottoIssuance.getIssuedLottos();
    lottos.forEach((lotto) => OutputView.printLottoIssueDetails(lotto));
    return lottos;
  }

  static createAndPrintLottoStatistics(lottos, winningNumbers, bonusNumber) {
    const lottoStatistics = new LottoStatistics(lottos, winningNumbers, bonusNumber);
    const matchResults = lottoStatistics.getMatchResults();
    OutputView.printWinningDetails(matchResults);
    return matchResults;
  }

  static createAndPrintLottoRevenue(lottoCount, matchResults) {
    const lottoRevenue = new LottoRevenue(lottoCount, matchResults);
    const revenue = lottoRevenue.getRevenue();
    OutputView.printRevenue(revenue);
  }
}

export default LottoProcessController;
