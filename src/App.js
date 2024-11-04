import OutputHandler from './view/OuputHandler.js';
import LottoResult from './model/LottoResult.js';
import LottoGenerator from './model/LottoGenerator.js';
import InputValidator from './controller/InputValidator.js';
import InputHandler from './view/InputHandler.js';

class App {
  async run() {
    const print = new OutputHandler();
    const input = new InputHandler();

    const ticketCount = await InputValidator.promptForMoney(input);
    const lottos = LottoGenerator.generateMultipleLottos(ticketCount);
    print.printLottos(ticketCount, lottos);

    const winningNumbers = await InputValidator.promptForWinningNumbers(input);
    const bonusNumber = await InputValidator.promptForBonusNumber(
      input,
      winningNumbers,
    );
    const lottoResult = new LottoResult(
      winningNumbers,
      bonusNumber,
      ticketCount,
      lottos,
    );
    print.printResult(lottoResult.calculateResults());
    print.printProfit(lottoResult.calculateProfitRate());
  }
}

export default App;
