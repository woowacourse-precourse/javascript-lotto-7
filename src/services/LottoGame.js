import { MESSAGES, PRIZE_MESSAGES } from '../constants/index.js';
import { InputHandler, Printer } from '../io/index.js';
import { Lotto, LottoChecker, Prize } from '../models/index.js';
import { calculateTicketCount, generateLottoNumbers } from '../utils/LottoUtils.js';
import { InputStore } from './index.js';

class LottoGame {
  #tickets;

  constructor() {
    this.console = new InputHandler();
    this.store = new InputStore();
    this.prize = new Prize();
    this.lottoChecker = new LottoChecker();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(MESSAGES.moneyInput);
    this.store.setMoney(money);

    const ticketCount = calculateTicketCount(money);
    Printer.print(MESSAGES.howManyBought(ticketCount));

    this.#issueTickets(ticketCount);
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(MESSAGES.mainNumbers);
    this.store.setMainNumbers(mainNumbers);

    const bonusNumber = await this.console.processBonusInput(MESSAGES.bonusNumber);
    this.store.setBonusNumber(bonusNumber);
  }

  presentResult() {
    const ticketsResult = this.#tickets.map((lotto) => this.lottoChecker.checkLotto(lotto));
    const earningsRate = this.#makeStatistics();
    this.#printStatistics();
    Printer.print(MESSAGES.earningsRateIs(earningsRate));
  }

  #issueTickets(ticketCount) {
    const tickets = [...Array(ticketCount)].reduce((acc) => {
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
      mainNumbers: this.store.getMainNumbers(),
      bonusNumber: this.store.getBonusNumber(),
    };

    this.#tickets.forEach((lotto) => lotto.matchNumbers(winningNumbers));
  }

  #calculateEarningsRate() {
    const totalPrizeMoney = this.prize.getPrizeMoney();
    const investmentMoney = this.store.getMoney();
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
