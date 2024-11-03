import UserInput from './View/UserInput.js';
import UserOutput from './View/UserOutput.js';
import MoneyToLottos from './Contoller/MoneyToLottos.js';
import LottoResultAnalysis from './Contoller/LottoResultAnalysis.js';

class App {
  userInput;

  constructor() {
    this.userInput = new UserInput();
  }
  async run() {
    const purchaseAmount = await this.userInput.inputPurchaseAmount();
    const moneyToLottos = new MoneyToLottos(purchaseAmount);
    const userLottos = moneyToLottos.generateLottoTickets();
    UserOutput.showPurchsedLotto(userLottos);
    const winningNumbers = await this.userInput.inputWinningNumbers();
    const bonusNumber = await this.userInput.inputBonusNumber(winningNumbers);
    const lottoResultAnalysis = new LottoResultAnalysis(
      winningNumbers,
      bonusNumber
    );
    const { winningStatus, profitRate } =
      lottoResultAnalysis.winningStatusAnalaysis(userLottos);
    UserOutput.showWinningStatus(winningStatus);
    UserOutput.showProfitRate(profitRate);
  }
}

export default App;
