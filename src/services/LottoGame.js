import { LOTTO_MESSAGES } from '../constants/index.js';
import { ConsoleIO } from '../io/index.js';
import { Lotto } from '../models/index.js';
import { generateLottoNumbers } from '../utils/LottoUtils.js';
import { LottoStorage } from './index.js';

class LottoGame {
  #tickets;

  constructor() {
    this.console = new ConsoleIO();
    this.storage = new LottoStorage();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(LOTTO_MESSAGES.moneyInput);
    this.storage.setMoney(money);

    const countOfTickets = money / 1000;
    ConsoleIO.print(countOfTickets + LOTTO_MESSAGES.howManyBought);

    const tickets = [...Array(countOfTickets)].reduce((acc) => {
      const numbers = generateLottoNumbers();
      const lotto = new Lotto(numbers);
      return [...acc, lotto];
    }, []);

    this.#tickets = tickets;
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(LOTTO_MESSAGES.mainNumbers);
    this.storage.setMainNumbers(mainNumbers);

    const bonusNumber = await this.console.processBonusInput(LOTTO_MESSAGES.bonusNumber);
    this.storage.setBonusNumber(bonusNumber);
  }
}

export default LottoGame;
