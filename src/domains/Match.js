import { Console } from '@woowacourse/mission-utils';
import { RESULT, UNIT } from '../constants/Constants.js';
import Ticket from './Ticket.js';
import Jackpot from './Jackpot.js';

class Match {
  constructor() {
    this.lottos = [];
    this.jackpot = [];
    this.bonus = null;
    this.prize = 0;
    this.ranks = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  }

  resetRanks() {
    this.ranks = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  }

  async getLottos() {
    const lottoTickets = new Ticket();
    await lottoTickets.startGetTicket();
    this.lottos = lottoTickets.getTicket();
    lottoTickets.displayTicket();
  }

  async getJackpot() {
    const jackpot = new Jackpot();
    await jackpot.startGetJackpot();
    this.jackpot = jackpot.getJackpot();
    this.bonus = jackpot.getBonus();
  }

  matchLottos() {
    this.lottos.forEach((lotto) => {
      const matchCount = lotto.filter((num) =>
        this.jackpot.includes(num)
      ).length;
      const matchBonus = lotto.includes(this.bonus);
      this.getLottosCount(matchCount, matchBonus);
    });
  }

  getLottosCount(matchCount, matchBonus) {
    if (matchCount === 6) {
      this.ranks[1]++;
      return;
    }
    if (matchCount === 5 && matchBonus) {
      this.ranks[3]++;
      return;
    }
    if (matchCount === 5) {
      this.ranks[2]++;
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

  getTotalPrize() {
    let totalPrize = 0;
    for (let i = 1; i <= 5; i++) {
      totalPrize += this.ranks[i] * UNIT[i];
    }
    return totalPrize;
  }

  displayResult() {
    Console.print(RESULT.HEADER);
    for (let i = 5; i >= 1; i--) {
      Console.print(`${RESULT[i]} ${this.ranks[i]}${RESULT.COUNT_CHAR}`);
    }
  }
}

export default Match;
