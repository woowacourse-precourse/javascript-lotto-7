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
  #prizeCalculator;
  #purchaseAmount;

  async startGame() {
    try {
      await this.#initializeGame();
      await this.#runGame();
    } catch (error) {
      printMessage(error.message);
    }
  }

    /**
   * 게임 초기화 메서드
   * 로또 구매 후 구매 확인 메시지와 생성된 로또 번호를 출력한다.
   */
  async #initializeGame() {
    await this.#purchaseLotto();
    this.#printPurchaseMessage();
    this.#printAllLottoNumbers();
  }

    /**
   * 게임 실행 메서드
   * 당첨 번호 설정 후 통계 및 수익률을 계산하고 출력한다.
   */
  async #runGame() {
    await this.#setWinningNumbers();

    const statistics = this.#generateLottoResults();
    this.#printWinningStatistic(statistics);

    const rateOfReturn = this.#generateRateOfReturn();
    this.#printRateOfReturn(rateOfReturn);
  }

  async #purchaseLotto() {
    await retryOnError(async () => {
      this.#purchaseAmount = await InputView.getPurchaseAmount();
      this.#lottoMachine = new LottoMachine(this.#purchaseAmount);
    });
  }

  async #setWinningNumbers() {
    await retryOnError(async () => this.#lottoChecker = new LottoChecker(await InputView.getWinningNumbers()));
    await retryOnError(async () => this.#lottoChecker.setBonusNumber(await InputView.getBonusNumber()));
  }

  #generateLottoResults() {
    const lottoNumbersList = this.#lottoMachine.getLottoNumbers();
    const results = this.#lottoChecker.getMatchResults(lottoNumbersList);
    this.#prizeCalculator = new PrizeCalculator(results);
    return this.#prizeCalculator.getStatistics();
  }

  #generateRateOfReturn() {
    const totalPrize = this.#prizeCalculator.getTotalPrize();
    const profitAnalyzer = new ProfitAnalyzer(totalPrize, this.#purchaseAmount);
    return profitAnalyzer.getRateOfReturn();
  }

  #printPurchaseMessage() {
    const lottoCount = this.#lottoMachine.getLottoCount();
    OutputView.printPurchaseMessage(lottoCount);
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

