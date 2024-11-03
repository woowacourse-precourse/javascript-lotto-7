import { MESSAGES, PRIZE_MESSAGES } from '../constants/index.js';
import { InputHandler, Printer } from '../io/index.js';
import { Lotto, Prize } from '../models/index.js';
import { calculateTicketCount, generateLottoNumbers } from '../utils/LottoUtils.js';
import { InputStorage } from './index.js';

class LottoGame {
  #tickets;
  #ticketCount = 0;

  constructor() {
    this.console = new InputHandler();
    this.storage = new InputStorage();
    this.prize = new Prize();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(MESSAGES.moneyInput);
    this.storage.setMoney(money);

    this.#ticketCount = calculateTicketCount(money);
    Printer.print(MESSAGES.howManyBought(this.#ticketCount));

    this.#issueTickets();
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(MESSAGES.mainNumbers);
    this.storage.setMainNumbers(mainNumbers);

    const bonusNumber = await this.console.processBonusInput(MESSAGES.bonusNumber);
    this.storage.setBonusNumber(bonusNumber);
  }

  presentResult() {
    // #lottoChecker.checkLotto(lotto);
    const earningsRate = this.#makeStatistics();
    this.#printStatistics();
    Printer.print(MESSAGES.earningsRateIs(earningsRate));
  }

  #issueTickets() {
    const tickets = [...Array(this.#ticketCount)].reduce((acc) => {
      const numbers = generateLottoNumbers();
      return [...acc, new Lotto(numbers)];
    }, []);

    this.#tickets = tickets;
  }

  #makeStatistics() {
    this.#checkTickets();
    this.#tickets.forEach((lotto) => {
      const ranking = Prize.rank(lotto.getMatchData());
      lotto.setRanking(ranking);
    });

    this.prize.sumPrizeMoney(this.#tickets);

    return this.#calculateEarningsRate();
  }

  #checkTickets() {
    const winningNumbers = {
      mainNumbers: this.storage.getMainNumbers(),
      bonusNumber: this.storage.getBonusNumber(),
    };

    this.#tickets.forEach((lotto) => lotto.matchNumbers(winningNumbers));
  }

  #calculateEarningsRate() {
    const totalPrizeMoney = this.prize.getPrizeMoney();
    const investmentMoney = this.storage.getMoney();
    return ((totalPrizeMoney / investmentMoney) * 100).toFixed(1);
  }

  #printStatistics() {
    const prizeCount = this.prize.combinePrizeCount(this.#tickets);

    Printer.print(MESSAGES.winningStatistics);

    for (const [rankingName, count] of Object.entries(prizeCount)) {
      Printer.print(PRIZE_MESSAGES.howManyMatchAndCount(rankingName, count));
    }
  }
}

export default LottoGame;
