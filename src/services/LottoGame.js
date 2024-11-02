import { MESSAGES, PRIZE_MESSAGES } from '../constants/index.js';
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
    const earningsRate = this.#makeStatistics();
    this.#printStatistics();
    ConsoleIO.print(earningsRate);
    ConsoleIO.print(MESSAGES.earningsRateIs(earningsRate));
  }

  #issueTickets() {
    const tickets = [...Array(this.#countOfTickets)].reduce((acc) => {
      const numbers = generateLottoNumbers();
      return [...acc, new Lotto(numbers)];
    }, []);

    return tickets;
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
    const prizeCount = this.prize.sumPrizeCount(this.#tickets);

    ConsoleIO.print(MESSAGES.winningStatistics);
    for (const [rankingName, count] of Object.entries(prizeCount)) {
      ConsoleIO.print(PRIZE_MESSAGES.howManyMatchAndCount(rankingName, count));
    }
  }
}

export default LottoGame;
