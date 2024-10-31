import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import parser from '../utils/parser.js';
import inputPipe from '../utils/inputPipe.js';
import LottoCount from '../domain/LottoCount.js';
import Lotto from '../domain/Lotto.js';
import LottoBonus from '../domain/LottoBonus.js';
import LottoIssuance from '../domain/LottoIssuance.js';
import LottoStatistics from '../domain/LottoStatistics.js';
import LottoRevenue from '../domain/LottoRevenue.js';

class LottoController {
  async start() {
    const lottoCount = await this.#inputLottoPurchasePrice();
    OutputView.printLottoPurchaseCount(lottoCount);

    const lottoIssuance = new LottoIssuance(lottoCount);
    const lottos = lottoIssuance.getIssuedLottos();
    lottos.forEach((lotto) => OutputView.printLottoIssueDetails(lotto));

    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber(winningNumbers);

    const lottoStatistics = new LottoStatistics(lottos, winningNumbers, bonusNumber);
    const matchResults = lottoStatistics.getMatchResults();
    OutputView.printWinningDetails(matchResults);

    const lottoRevenue = new LottoRevenue(lottoCount, matchResults);
    const revenue = lottoRevenue.getRevenue();
    OutputView.printRevenue(revenue);
  }

  async #inputLottoPurchasePrice() {
    return await inputPipe(
      InputView.readLottoPurchasePriceAsync,
      parser.parseStringToNumber,
      LottoCount,
      'getLottoCount',
    );
  }

  async #inputWinningNumbers() {
    return await inputPipe(
      InputView.readWinningNumbersAsync,
      parser.parseExtractNumbers,
      Lotto,
      'getLottoNumbers',
    );
  }

  async #inputBonusNumber(winningNumbers) {
    return await inputPipe(
      InputView.readBonusNumberAsnyc,
      parser.parseStringToNumber,
      LottoBonus,
      'getBonusNumber',
      [winningNumbers],
    );
  }
}

export default LottoController;
