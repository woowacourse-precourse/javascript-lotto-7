import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateMoney from '../models/validations/MoneyInputValidator.js';
import validateBonus from '../models/validations/BonusInputValidator.js';
import winningParser from '../utils/WinningParser.js';
import Lotto from '../models/Lotto.js';

class Controller {
  static async run() {
    const money = await InputView.moneyInput();
    validateMoney(money);
    OutputView.printLotto(money);
    const winning = await InputView.WinningInput();
    const winningLotto = new Lotto(winningParser(winning));
    const bonus = await InputView.bonusInput();
    validateBonus(bonus, winningLotto.getNumbers());
    OutputView.printStatistics();
  }
}

export default Controller;
