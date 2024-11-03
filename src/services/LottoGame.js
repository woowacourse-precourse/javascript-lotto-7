import { MESSAGES, PRIZE_MESSAGES } from '../constants/index.js';
import { InputHandler, Printer } from '../io/index.js';
import { Lotto, LottoChecker } from '../models/index.js';
import { calculateEarningsRate, calculateTicketCount, generateLottoNumbers } from '../utils/LottoUtils.js';
import { InputStore } from './index.js';

class LottoGame {
  #tickets;

  constructor() {
    this.console = new InputHandler();
    this.store = new InputStore();
    this.lottoChecker = new LottoChecker();
  }

  async putMoney() {
    const money = await this.console.processMoneyInput(MESSAGES.moneyInput);
    this.store.setMoney(money);

    const ticketCount = calculateTicketCount(money);
    this.#issueTickets(ticketCount);
    Printer.print(MESSAGES.howManyBought(ticketCount));
  }

  #issueTickets(ticketCount) {
    const tickets = [...Array(ticketCount)].reduce((acc) => {
      const numbers = generateLottoNumbers();
      return [...acc, new Lotto(numbers)];
    }, []);

    this.#tickets = tickets;
  }

  async enterNumber() {
    const mainNumbers = await this.console.processMainInput(MESSAGES.mainNumbers);
    const bonusNumber = await this.console.processBonusInput(MESSAGES.bonusNumber);
    this.store.setMainNumbers(mainNumbers);
    this.store.setBonusNumber(bonusNumber);
  }

  presentResult() {
    const lottoResults = this.#tickets.map((lotto) => this.lottoChecker.checkLotto(lotto));
    this.#printStatistics(lottoResults);

    const totalPrizeMoney = lottoResults.reduce((acc, cur) => acc + cur.getPrizeMoney(), 0);
    const investmentMoney = this.store.getMoney();
    const earningsRate = calculateEarningsRate(totalPrizeMoney, investmentMoney);
    Printer.print(MESSAGES.earningsRateIs(earningsRate));
  }

  #printStatistics(lottoResults) {
    const prizeCount = {
      place5: 0,
      place4: 0,
      place3: 0,
      place2: 0,
      place1: 0,
    };

    lottoResults.forEach((result) => (prizeCount[`place${result.getRanking()}`] += 1));

    Printer.print(MESSAGES.winningStatistics);

    for (const [rankingName, count] of Object.entries(prizeCount)) {
      Printer.print(PRIZE_MESSAGES.howManyMatchAndCount(rankingName, count));
    }
  }
}

export default LottoGame;
