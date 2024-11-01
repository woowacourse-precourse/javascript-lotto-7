import { LOTTO_MESSAGES } from '../constants/index.js';
import { ConsoleIO } from '../io/index.js';

class LottoGame {
  constructor() {
    this.console = new ConsoleIO();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(LOTTO_MESSAGES.moneyInput);
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(LOTTO_MESSAGES.mainNumbers);
    const bonusNumber = await this.console.processBonusInput(LOTTO_MESSAGES.bonusNumber);
  }
}

export default LottoGame;
