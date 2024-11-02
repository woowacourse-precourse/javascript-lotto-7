import { printResult, readUserInput } from './util/missionUtil.js';
import { MONEY_MESSAGES } from './util/constant.js';

class InputView {
  static async processMoney() {
    try {
      const money = await this.readInputMoney();
      this.validateMoney(money.trim(''));
      return money.trim('');
    } catch (error) {
      printResult(error.message);
      return await this.processMoney();
    }
  }

  static async readInputMoney() {
    return await readUserInput(MONEY_MESSAGES.question);
  }

  static validateMoney(money) {
    const moneyNumber = Number(money);

    if (Number.isNaN(moneyNumber))
      throw new Error(MONEY_MESSAGES.error.notNumber);
    if (money.length === 0) throw new Error(MONEY_MESSAGES.error.notBlank);
    if (moneyNumber % 1000 !== 0)
      throw new Error(MONEY_MESSAGES.error.notDevide);
  }
}

export default InputView;
