import { ERROR, INPUT, OUTPUT, UNIT } from '../constants/Constants.js';
import { ticketCount } from '../utils/Calculation.js';
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  #tickets;

  constructor() {
    this.#tickets;
  }

  async getTicketCount() {
    const cost = await Console.readLineAsync(INPUT.COST);

    if (isNaN(Number(cost))) {
      throw new Error(ERROR.COST_TYPE);
    }

    if (Number(cost) % UNIT.TICKET_PRICE !== 0) {
      throw new Error(ERROR.COST_UNIT);
    }

    this.#tickets = ticketCount(cost);
    Console.print(`\n${this.#tickets}${OUTPUT.TICKET}`);
  }
}

export default LottoController;
