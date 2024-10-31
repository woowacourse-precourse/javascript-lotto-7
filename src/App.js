import UserInput from './Input.js';
import Game from './Game.js';
import DisplayOutput from './DisplayOutput.js';
class App {

  constructor(){
    this.userInput = new UserInput();
    this.displayOutput = new DisplayOutput();
    this.game = new Game();
  }
  async run() {

    const paidMoney = await this.userInput.getUserPaidMoney();
    const winngingNumber = await this.userInput.getWinningNumber();
    const bonusNumber = await this.userInput.getBonusNumber();

    this.displayOutput.displayPaidLotto();
    this.game.purchaseLotto(paidMoney);

  }
}

export default App;
