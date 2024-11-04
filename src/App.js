import InputHandler from "./io/InputHandler.js";
import LottoProcessor from "./lotto/LottoProcessor.js";
import WinningLotto from "./lotto/WinningLotto.js";
import OutputHandler from "./io/OutputHandler.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.winningLotto = new WinningLotto();
    this.lottoProcessor = new LottoProcessor(this.outputHandler, this.winningLotto);
  }

  async run() {
    // 1. 로또 구매 개수 입력 받기
    const lottoCount = await this.inputHandler.getPurchaseAmount();
    this.lottoProcessor.setLottoNumbers(lottoCount);

    // 2. 당첨 번호 입력 받기
    const winningNumber = await this.inputHandler.getWinningNumber();
    this.winningLotto.setWinningNumbers(winningNumber);

    // 3. 보너스 번호 입력 받기
    const bonusNumber = await this.inputHandler.getBonusNumber(this.winningLotto.getWinningNumbersArray());
    this.winningLotto.setBonusNumber(bonusNumber);

    // 4. 로또 번호 비교
    this.lottoProcessor.compareLottoNumbers();

    // 5. 당첨 결과 출력
    this.outputHandler.printResult(this.lottoProcessor.getWinningRanks());

    //6. 수익률 계산 및 출력
    const rate = this.lottoProcessor.calculateRateOfReturn(lottoCount);
    this.outputHandler.printRateOfReturn(rate);
  }
}

export default App;
