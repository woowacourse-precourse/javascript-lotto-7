import LottoManager from "./LottoManager.js";
import InputHandler from "./InputHandler.js";
import StatisticManager from "./StatisticManager.js";

class App {
  constructor() {
    this.lottoManager = new LottoManager();
    this.inputHandler = new InputHandler();
    this.statisticManager = new StatisticManager();
  }
  async run() {
    const purchaseAmount = await this.inputHandler.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const userLottoNumbers = this.lottoManager.generateLotto(lottoCount);

    await this.lottoManager.printLottoNumbers(userLottoNumbers, lottoCount);

    const winningNumber = await this.inputHandler.getWinningNumbers();
    const bonusNumber = await this.inputHandler.getBonusNumber(winningNumber);

    const matchingResults = this.statisticManager.checkMatchingLottos(
      userLottoNumbers,
      new Set(winningNumber),
      bonusNumber
    );
    const rate = this.statisticManager.calculateRate(matchingResults, purchaseAmount);
    await this.statisticManager.printStatistics(matchingResults, rate);
  }
}

export default App;
