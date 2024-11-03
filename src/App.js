import UserInput from './view/UserInput.js';
import Game from './core/Game.js';
import DisplayOutput from './view/DisplayOutput.js';
class App {

  constructor(){
    this.userInput = new UserInput();
    this.displayOutput = new DisplayOutput();
    this.game = new Game();
  }
  async run() {

    // 로또 구매
    const paidMoney = await this.userInput.getUserPaidMoney();
    const lottoTickets= this.game.purchaseLotto(paidMoney);

    this.displayOutput.displayPaidLotto(lottoTickets);

    const lottoPackage = this.game.generateLotto(lottoTickets);

    this.displayOutput.displayLotto(lottoPackage);

    // 당청번호 및 보너스 번호 입력
    const winngingNumber = await this.userInput.getWinningNumber();
    const splitWinningNumbers = this.game.splitWinningNumbers(winngingNumber);
    const bonusNumber = await this.userInput.getBonusNumber();

    const lottoReult = this.game.checkLottoResult(lottoPackage, splitWinningNumbers, bonusNumber)


    this.displayOutput.displayLottoResult(lottoReult);

    const profit = this.game.calculateProfit(lottoReult, paidMoney)
    this.displayOutput.displayProfit(profit);
  }
}

export default App;
