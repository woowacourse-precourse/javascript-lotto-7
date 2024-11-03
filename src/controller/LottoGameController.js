import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import LottoMachine from '../model/LottoMachine.js';
import LottoChecker from '../model/LottoChecker.js';

class LottoGameController {
  #lottoMachine;
  #lottoChecker;

  async startGame() {
    await this.#initializeGame();
    await this.#runGame();
  }

  async #initializeGame() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    this.#lottoMachine = new LottoMachine(purchaseAmount); 

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
    const totalPrize = new PrizeCalculator(results).getTotalPrize();
  }

  #checkLottoResults() {
    const lottoNumbersList = this.#lottoMachine.getLottoNumbers();
    return this.#lottoChecker.getMatchResults(lottoNumbersList);
  }

  #printWinningStatistic() {
    
  }

  #printAllLottoNumbers() {
    const lottoNumbers = this.#lottoMachine.getLottoNumbers();
    OutputView.printLottoNumbers(lottoNumbers); 
  }

}

export default LottoGameController;