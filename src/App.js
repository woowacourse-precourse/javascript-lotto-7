import UserInput from './View/UserInput.js';
import UserOutput from './View/UserOutput.js';
import MoneyToLottos from './Contoller/MoneyToLottos.js';
import LottoResultAnalysis from './Contoller/LottoResultAnalysis.js';

class App {
  userInput;
  userOutput;
  constructor() {
    this.userInput = new UserInput();
    this.userOutput = new UserOutput();
  }
  async run() {
    const purchaseAmount = await this.userInput.inputPurchaseAmount();
    const moneyToLottos = new MoneyToLottos(purchaseAmount);
    const userLottos = moneyToLottos.generateLottoTickets();
    this.userOutput.showPurchsedLotto(userLottos);
    const winningNumbers = await this.userInput.inputWinningNumbers();
    const bonusNumber = await this.userInput.inputBonusNumber(winningNumbers);
    const lottoResultAnalysis = new LottoResultAnalysis(
      winningNumbers,
      bonusNumber
    );
    const { winningStatus, profitRate } =
      lottoResultAnalysis.winningStatusAnalaysis(userLottos);
    this.userOutput.showWinningStatus(winningStatus);
    this.userOutput.showProfitRate(profitRate);
  }
}

export default App;
