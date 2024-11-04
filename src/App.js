import InputHandler from './view/InputHandler.js';
import OutputHandler from './view/OuputHandler.js';
import InputValidator from './controller/InputProcessor.js';
import LottoGenerator from './model/LottoGenerator.js';
import LottoResult from './model/LottoResult.js';

class App {
  constructor() {
    this.output = new OutputHandler();
    this.input = new InputHandler();
  }

  async run() {
    const ticketCount = await InputValidator.promptForMoney(this.input);
    const lottos = LottoGenerator.generateMultipleLottos(ticketCount);
    this.output.printLottos(ticketCount, lottos);

    const winningNumbers = await InputValidator.promptForWinningNumbers(
      this.input,
    );
    const bonusNumber = await InputValidator.promptForBonusNumber(
      this.input,
      winningNumbers,
    );

    const lottoResult = new LottoResult(
      winningNumbers,
      bonusNumber,
      ticketCount,
      lottos,
    );
    this.displayResults(lottoResult);
  }

  displayResults(lottoResult) {
    this.output.printResult(lottoResult.calculateResults());
    this.output.printProfit(lottoResult.calculateProfitRate());
  }
}

export default App;
