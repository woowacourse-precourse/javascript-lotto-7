import UserInput from './Input.js';

class App {

  constructor(){
    this.userInput = new UserInput();
  }
  async run() {

    const paidMoney = await this.userInput.getUserPaidMoney();
    const winngingNumber = await this.userInput.getWinningNumber();
    const bonusNumber = await this.userInput.getBonusNumber();
  }
}

export default App;
