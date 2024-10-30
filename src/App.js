import { validateInputMoney } from './utils/validate.js';
import InputView from './view/InputView.js';
import OuputView from './view/OutputView.js';

class App {
  #money;

  async run() {
    await this.setMoney();
  }

  async setMoney() {
    try {
      const inputMoney = await InputView.readMoney();
      validateInputMoney(inputMoney);
      this.#money = Number(inputMoney);
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.setMoney();
    }
  }
}

export default App;
