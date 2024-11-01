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
    const money = await this.console.processMoneyInput(MESSAGES.moneyInput);
    this.storage.setMoney(money);

    this.#countOfTickets = calculateCountOfPurchase(money);
    ConsoleIO.print(this.#countOfTickets + MESSAGES.howManyBought);

    this.#tickets = this.#issueTickets();
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(MESSAGES.mainNumbers);
    this.storage.setMainNumbers(mainNumbers);

    const bonusNumber = await this.console.processBonusInput(MESSAGES.bonusNumber);
    this.storage.setBonusNumber(bonusNumber);
  }

  presentResult() {
    this.#makeStatistics();
    ConsoleIO.print(MESSAGES.winningStatistics);
  }

  #issueTickets() {
    const tickets = [...Array(this.#countOfTickets)].reduce((acc) => {
      const numbers = generateLottoNumbers();
      return [...acc, new Lotto(numbers)];
    }, []);

    return tickets;
  }
}

export default LottoGame;
