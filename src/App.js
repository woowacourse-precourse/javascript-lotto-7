import UserInput from './Input.js';
import Game from './Game.js';
import DisplayOutput from './DisplayOutput.js';
import Lotto from './Lotto.js';
class App {

  constructor(){
    this.userInput = new UserInput();
    this.displayOutput = new DisplayOutput();
    this.game = new Game();
    // this.lotto = new Lotto();
  }
  async run() {

    // purcharse lotto
    const paidMoney = await this.userInput.getUserPaidMoney();
    const lottoTickets= this.game.purchaseLotto(paidMoney);

    this.displayOutput.displayPaidLotto(lottoTickets);

    // display pucharased lotto
    const lottoPackage = this.game.generateLotto(lottoTickets);


    this.displayOutput.displayLotto(lottoPackage);


    const winngingNumber = await this.userInput.getWinningNumber();
    const splitWinningNumbers = this.game.splitWinningNumbers(winngingNumber);

    const bonusNumber = await this.userInput.getBonusNumber();

    const lottoReult = this.game.checkLottoResult(lottoPackage, splitWinningNumbers, bonusNumber)

    this.displayOutput.displayLottoResult(lottoReult);

    // 수익률 계산 후 표기
    const profit = this.game.calculateProfit(lottoReult, paidMoney)
    this.displayOutput.displayProfit(profit);
  }
}

export default App;
