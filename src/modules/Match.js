import { Console } from '@woowacourse/mission-utils';
import { RESULT } from '../constants/Constants.js';
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

  displayResult() {
    Console.print(RESULT.HEADER);
    Console.print(`${RESULT[5]} ${this.ranks[5]}${RESULT.COUNT_CHAR}`);
    Console.print(`${RESULT[4]} ${this.ranks[4]}${RESULT.COUNT_CHAR}`);
    Console.print(`${RESULT[3]} ${this.ranks[3]}${RESULT.COUNT_CHAR}`);
    Console.print(`${RESULT[2]} ${this.ranks[2]}${RESULT.COUNT_CHAR}`);
    Console.print(`${RESULT[1]} ${this.ranks[1]}${RESULT.COUNT_CHAR}`);
  }
}

export default Match;
