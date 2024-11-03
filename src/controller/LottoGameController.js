import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import LottoMachine from '../model/LottoMachine.js';
import LottoChecker from '../model/LottoChecker.js';
import PrizeCalculator from '../model/PrizeCalculator.js';
import ProfitAnalyzer from '../model/ProfitAnalyzer.js';
import { printMessage } from '../utils/console.js';
import retryOnError from '../utils/retryOnError.js';

class LottoGameController {
  #lottoMachine;
  #lottoChecker;
  #purchaseAmount;

  async startGame() {
    try {
      await this.#initializeGame();  
      await this.#runGame();         
    } catch (error) {
      printMessage(error.message);
    }
  }

  async #initializeGame() {
    await retryOnError(async () => {
      this.#purchaseAmount = await InputView.getPurchaseAmount();
      this.#lottoMachine = new LottoMachine(this.#purchaseAmount); 
    });

    const lottoCount = this.#lottoMachine.getLottoCount();
    OutputView.printPurchaseMessage(lottoCount);

    this.#printAllLottoNumbers();
  }

  async #runGame() {
    const winningNumbers = await InputView.getWinningNumbers();
    this.#lottoChecker = new LottoChecker(winningNumbers);

    const bonusNumber = await InputView.getBonusNumber();
    this.#lottoChecker.setBonusNumber(bonusNumber);

    const results = this.#checkLottoResults();
    const prizeCalculator = new PrizeCalculator(results);
    const statistics = prizeCalculator.getStatistics();
    const totalPrize = prizeCalculator.getTotalPrize();

    this.#printWinningStatistic(statistics);

    const profitAnalyzer = new ProfitAnalyzer(totalPrize, this.#purchaseAmount);
    const rateOfReturn = profitAnalyzer.getRateOfReturn();
    this.#printRateOfReturn(rateOfReturn);
  }

  #checkLottoResults() {
    const lottoNumbersList = this.#lottoMachine.getLottoNumbers();
    return this.#lottoChecker.getMatchResults(lottoNumbersList);
  }

  #printWinningStatistic(statistics) {
    OutputView.printWinningStatistics(statistics);
  }

  #printAllLottoNumbers() {
    const lottoNumbers = this.#lottoMachine.getLottoNumbers();
    OutputView.printLottoNumbers(lottoNumbers);
  }

  #printRateOfReturn(rateOfReturn) {
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default LottoGameController;
