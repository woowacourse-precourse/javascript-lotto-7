import { LOTTO_MESSAGES } from '../constants/index.js';
import { ConsoleIO } from '../io/index.js';
import { LottoStorage } from './index.js';

class LottoGame {
  constructor() {
    this.console = new ConsoleIO();
    this.storage = new LottoStorage();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(LOTTO_MESSAGES.moneyInput);
    this.storage.setMoney(money);
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(LOTTO_MESSAGES.mainNumbers);
    this.storage.setMainNumbers(mainNumbers);

    const bonusNumber = await this.console.processBonusInput(LOTTO_MESSAGES.bonusNumber);
    this.storage.setBonusNumber(bonusNumber);
  }
}

export default LottoGame;
