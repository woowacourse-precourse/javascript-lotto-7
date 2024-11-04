import { Console } from '@woowacourse/mission-utils';
import { RESULT, UNIT } from '../constants/Constants.js';
import Ticket from '../domains/Ticket.js';
import Jackpot from '../domains/Jackpot.js';
import { ROI } from '../utils/Calculation.js';

class LottoController {
  constructor() {
    this.ticket = new Ticket();
    this.jackpot = new Jackpot();
    this.lottos = [];
    this.winnings = [];
    this.bonus = null;
    this.cost = 0;
    this.prize = 0;
    this.ranks = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  }

  resetRanks() {
    this.ranks = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  }

  async getLottos() {
    await this.ticket.startGetTicket();
    this.lottos = this.ticket.getTicket();
  }

  printLottos() {
    this.ticket.displayTicket();
  }

  getCost() {
    this.cost = this.ticket.getCost();
    return this.cost;
  }

  async getJackpot() {
    await this.jackpot.startGetJackpot();
    this.winnings = this.jackpot.getJackpot();
  }

  getBonus() {
    this.bonus = this.jackpot.getBonus();
  }

  calculateMatchCount(lotto) {
    return lotto.filter((num) => this.winnings.includes(num)).length;
  }

  calculateBonusTrue(lotto) {
    return lotto.includes(Number(this.bonus));
  }

  matchLottos() {
    this.lottos.forEach((lotto) => {
      const matchCount = this.calculateMatchCount(lotto);
      const matchBonus = this.calculateBonusTrue(lotto);
      this.getLottosCount(matchCount, matchBonus);
    });
  }

  getLottosCount(matchCount, matchBonus) {
    if (matchCount === 6) {
      this.ranks[1]++;
      return;
    }
    if (matchCount === 5 && matchBonus) {
      this.ranks[2]++;
      return;
    }
    if (matchCount === 5 && !matchBonus) {
      this.ranks[3]++;
      return;
    }
    if (matchCount === 4) {
      this.ranks[4]++;
      return;
    }
    if (matchCount === 3) {
      this.ranks[5]++;
      return;
    }
  }

  displayStatisticsResult() {
    Console.print(RESULT.HEADER);
    for (let i = 5; i >= 1; i--) {
      Console.print(`${RESULT[i]} ${this.ranks[i]}${RESULT.COUNT_CHAR}`);
    }
  }
  getTotalPrize() {
    let totalPrize = 0;
    for (let i = 1; i <= 5; i++) {
      totalPrize += this.ranks[i] * UNIT[i];
    }
    return totalPrize;
  }

  calculateROI() {
    const totalPrize = this.getTotalPrize();
    return ROI(totalPrize, this.cost);
  }

  displayROIResult() {
    const ROI = this.calculateROI();
    Console.print(`${RESULT.RATE_HEADER}${ROI}${RESULT.RATE_FOOTER}`);
  }

  async lottoGameStart() {
    await this.getLottos();
    this.printLottos();
    await this.getJackpot();
    this.resetRanks();
    this.matchLottos();
    this.displayStatisticsResult();
    this.getCost();
    this.displayROIResult();
  }
}

export default LottoController;
