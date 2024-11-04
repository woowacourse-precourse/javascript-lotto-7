import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateMoney from '../models/validations/MoneyInputValidator.js';
import validateBonus from '../models/validations/BonusInputValidator.js';
import winningParser from '../utils/WinningParser.js';
import Lotto from '../models/Lotto.js';
import calculate from '../utils/WinningDraw.js';

class Controller {
  static async run() {
    try {
      const money = await this.getMoney();
      const winningLotto = await this.getWinningLotto();
      const bonus = await this.getBonus(winningLotto);
      this.displayResults(money, winningLotto, bonus);
    } catch (error) {
      OutputView.printError(error);
    }
  }

  static async getMoney() {
    const money = await InputView.moneyInput();
    validateMoney(money);
    OutputView.printLotto(money);
    return money;
  }

  static async getWinningLotto() {
    const winning = await InputView.WinningInput();
    return new Lotto(winningParser(winning));
  }

  static async getBonus(winningLotto) {
    const bonus = await InputView.bonusInput();
    validateBonus(bonus, winningLotto.getNumbers());
    return bonus;
  }

  static displayResults(money, winningLotto, bonus) {
    const { prizeCounts, totalPrize } = calculate(winningLotto.getNumbers(), bonus);
    OutputView.printStatistics(prizeCounts);
    const returnOnInvestment = (totalPrize / money) * 100; // 수익률 (%)
    OutputView.printReturnOnInvestment(returnOnInvestment); // 수익률 출력
  }
}

export default Controller;
