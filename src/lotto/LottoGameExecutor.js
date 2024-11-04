import {
  printEmptyLine,
  printPurchaseResult,
  printStartWinningResult,
  printWinningResult,
  printTotalRateOfReturn
} from './view/OutputPrinter.js';
import { calculateReturnRate } from './ReturnRateCalculator.js';
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
    const purchaseAmount = await this.#lottoPayment.getPurchaseAmount();
    const lottoCount = await this.#lottoPayment.calculateLottoCountByAmount(purchaseAmount);

    printEmptyLine();

    const lottos = this.#lottoGenerator.generateLottosBycount(lottoCount);
    this.#printPurchaseLottos(lottoCount, lottos);

    const { winningNumbers, bonusNumber } = await getWinningLottoNumbersAndBonusNumber();
    const winningResults = this.#lottoResultevaluator.generateWinningResult(lottos, winningNumbers, bonusNumber);
    this.#printWinningResults(winningResults);

    const totalPrize = this.#calculateTotalWinningPrize(winningResults);
    const rateOfReturn = calculateReturnRate(totalPrize, purchaseAmount);
    this.#printRateOfReturn(rateOfReturn);
  }

  #printRateOfReturn(rateOfReturn) {
    printTotalRateOfReturn(rateOfReturn);
  }

  #calculateTotalWinningPrize(winningResults) {
    const totalWinningPrize = winningResults.reduce((prize, result) => prize + result.getTotalPrize(), 0);

    return totalWinningPrize;
  }

  #printWinningResults(winningResults) {
    printStartWinningResult();

    winningResults.forEach(result => {
      printWinningResult(result);
    });
  }

  #printPurchaseLottos(lottoCount, lottos) {
    const printLottos = lottos.map((lotto) => lotto.toString());
    printPurchaseResult(lottoCount, printLottos.join(`\n`));
    printEmptyLine();
  }
}

export default LottoGameExecutor;