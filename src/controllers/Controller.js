import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateMoney from '../models/validations/MoneyInputValidator.js';
import validateWinning from '../models/validations/WinningInputValidator.js';
import winningParser from '../utils/WinningParser.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
    validateMoney(money);
    OutputView.printLotto(money);
    const winning = await InputView.WinningInput();
    validateWinning(winningParser(winning));
  }
}

export default Controller;
