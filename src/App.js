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

    // 구매한 로또 개수 출력
    this.displayOutput.displayPaidLotto(lottoTickets);

    // 구매한 로또 개수 만큼 로또 번호 생성
    const lottoPackage = this.game.generateLotto(lottoTickets);

    // 구매한 로또 번호 출력
    this.displayOutput.displayLotto(lottoPackage);

    // 당청번호 및 보너스 번호 입력
    const winngingNumber = await this.userInput.getWinningNumber();
    const splitWinningNumbers = this.game.splitWinningNumbers(winngingNumber);
    const bonusNumber = await this.userInput.getBonusNumber();

    // 로또 결과 계산
    const lottoReult = this.game.checkLottoResult(lottoPackage, splitWinningNumbers, bonusNumber)

    // 로또 결과 출력
    this.displayOutput.displayLottoResult(lottoReult);

    // 수익률 계산 후 출력
    const profit = this.game.calculateProfit(lottoReult, paidMoney)
    this.displayOutput.displayProfit(profit);
  }
}

export default App;
