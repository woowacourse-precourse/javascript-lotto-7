import InputView from '../views/InputView.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
  }
}

export default Controller;
