import InputView from '../views/InputView.js';
import validateMoney from '../models/validations/MoneyInputValidator.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
    validateMoney(money);
  }
}

export default Controller;
