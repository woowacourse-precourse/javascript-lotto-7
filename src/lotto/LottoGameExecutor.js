import {
  printEmptyLine,
  printPurchaseResult,
  printStartWinningResult,
  printWinningResult
} from './view/OutputPrinter.js';
import { getWinningLottoNumbersAndBonusNumber } from './LottoWinningNumberReader.js';

class LottoGameExecutor {

  #lottoPayment;

  #lottoGenerator;

  #lottoResultevaluator;

  constructor(lottoPayment, lottoGenerator, lottoResultevaluator) {
    this.#lottoPayment = lottoPayment;
    this.#lottoGenerator = lottoGenerator;
    this.#lottoResultevaluator = lottoResultevaluator;
  }

  async startGame() {
    const lottoCount = await this.#lottoPayment.executePaymentAndGetLottoCount();

    printEmptyLine();

    const lottos = this.#lottoGenerator.generateLottosBycount(lottoCount);
    this.#printPurchaseLottos(lottoCount, lottos);

    printEmptyLine();

    const { winningNumbers, bonusNumber } = await getWinningLottoNumbersAndBonusNumber();

    const winningResults = this.#lottoResultevaluator.generateWinningResult(lottos, winningNumbers, bonusNumber);
    this.#printWinningResults(winningResults);
  }

  #printWinningResults(winningResults) {
    printStartWinningResult();

    winningResults.forEach(winningItem => {
      printWinningResult(winningItem);
    });
  }

  #printPurchaseLottos(lottoCount, lottos) {
    const printLottos = lottos.map((lotto) => lotto.toString());
    printPurchaseResult(lottoCount, printLottos.join(`\n`));
  }
}

export default LottoGameExecutor;