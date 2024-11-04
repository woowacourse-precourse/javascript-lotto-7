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

    this.outputHandler.printRateOfReturn(
      this.calculateRateOfReturn(lottoCount)
    );
  }

  // 수익률 계산
  calculateRateOfReturn(lottoCount) {
    const prize = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    const totalPrize = Object.keys(
      this.lottoProcessor.getWinningRanks()
    ).reduce(
      (acc, rank) =>
        acc + this.lottoProcessor.getWinningRanks()[rank] * prize[rank],
      0
    );
    const rate = (totalPrize / (lottoCount * 1000)) * 100;

    if (rate % 1 === 0) {
      return rate;
    } else if ((rate * 10) % 1 === 0) {
      return rate.toFixed(1);
    }
    return rate.toFixed(2);
  }
}

export default App;
