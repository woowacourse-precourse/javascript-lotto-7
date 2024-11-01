import { INPUT, OUTPUT } from '../constants/Constants.js';
import { ticketCount } from '../utils/Calculation.js';
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  #tickets;

  constructor() {
    this.#tickets;
  }

  async getTicketCount() {
    const cost = await Console.readLineAsync(INPUT.COST);
    this.#tickets = ticketCount(cost);
    Console.print(`${this.#tickets}${OUTPUT.TICKET}`);
  }
}

export default LottoController;
