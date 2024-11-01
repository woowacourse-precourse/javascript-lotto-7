import { MESSAGES } from '../constants/index.js';
import { ConsoleIO } from '../io/index.js';
import { Lotto, Prize } from '../models/index.js';
import { calculateCountOfPurchase, generateLottoNumbers } from '../utils/LottoUtils.js';
import { LottoStorage } from './index.js';

class LottoGame {
  #tickets;
  #countOfTickets = 0;

  constructor() {
    this.console = new ConsoleIO();
    this.storage = new LottoStorage();
    this.prize = new Prize();
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

  #makeStatistics() {
    // 필요 정보: 각 로또의 맞춘 갯수(로또 필드), 맞춘 갯수에 따른 상금 정보, 총 수익률(상금 합산 액)
    this.#checkTickets();
    this.#tickets[0].setRanking(Prize.rank(this.#tickets[0].getMatchData()));
  }

  #checkTickets() {
    const winningNumbers = {
      mainNumbers: this.storage.getMainNumbers(),
      bonusNumber: this.storage.getBonusNumber(),
    };

    this.#tickets.forEach((lotto) => lotto.matchNumbers(winningNumbers));
  }
}

export default LottoGame;
