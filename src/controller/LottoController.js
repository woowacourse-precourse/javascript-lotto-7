import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import parser from '../utils/parser.js';
import LottoCount from '../domain/LottoCount.js';
import Lotto from '../domain/Lotto.js';
import Bonus from '../domain/Bonus.js';
import LottoIssuance from '../domain/LottoIssuance.js';
import LottoStatistics from '../domain/LottoStatistics.js';

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

  }

  async #inputLottoPurchasePrice() {
    try {
      const lottoPurchasePrice = await InputView.readLottoPurchasePriceAsync();
      const parsePurchasePrice = parser.parseStringToNumber(lottoPurchasePrice);

      const lottoCount = new LottoCount(parsePurchasePrice);
      return lottoCount.getLottoCount();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputLottoPurchasePrice();
    }
  }

  async #inputWinningNumbers() {
    try {
      const winningNumbers = await InputView.readWinningNumbersAsync();
      const parseNumbers = parser.parseExtractNumbers(winningNumbers);

      const lotto = new Lotto(parseNumbers);
      return lotto.getLottoNumbers();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputWinningNumbers();
    }
  }

  async #inputBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumberAsnyc();
      const parseBonusNumber = parser.parseStringToNumber(bonusNumber);

      const bonus = new Bonus(parseBonusNumber, winningNumbers);
      return bonus.getBonusNumber();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputBonusNumber();
    }
  }
}

export default LottoController;
