import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateMoney from '../models/validations/MoneyInputValidator.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
    validateMoney(money);
    OutputView.printLotto(money);
  }
}

export default Controller;
