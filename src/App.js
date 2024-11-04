import InputHandler from "./InputHandler.js";
import LottoProcessor from "./lotto/LottoProcessor.js";
import WinningLotto from "./lotto/WinningLotto.js";
import OutputHandler from "./OutputHandler.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.winningLotto = new WinningLotto();
    this.lottoProcessor = new LottoProcessor(
      this.outputHandler,
      this.winningLotto
    );
  }

  async run() {
    const lottoCount = await this.inputHandler.getPurchaseAmount();
    this.lottoProcessor.setLottoNumbers(lottoCount);

    const winningNumber = await this.inputHandler.getWinningNumber();
    this.winningLotto.setWinningNumbers(winningNumber);

    const bonusNumber = await this.inputHandler.getBonusNumber(
      this.winningLotto.getWinningNumbersArray()
    );
    this.winningLotto.setBonusNumber(bonusNumber);

    this.lottoProcessor.compareLottoNumbers();

    this.outputHandler.printResult(this.lottoProcessor.getWinningRanks());

    const rate = this.lottoProcessor.calculateRateOfReturn(lottoCount);
    this.outputHandler.printRateOfReturn(rate);
  }
}

export default App;
