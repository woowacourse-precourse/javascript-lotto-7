import UserInput from './temp_view/UserInput.js';
import UserOutput from './temp_view/UserOutput.js';
import MoneyToLottos from './controller/MoneyToLottos.js';
import LottoResultAnalysis from './controller/LottoResultAnalysis.js';

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
      lottoResultAnalysis.winningStatusAnalysis(userLottos);
    this.userOutput.showWinningStatus(winningStatus);
    this.userOutput.showProfitRate(profitRate);
  }
}

export default App;
