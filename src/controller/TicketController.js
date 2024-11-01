import { INPUT, OUTPUT } from '../constants/Constants.js';
import { ticketCount } from '../utils/Calculation.js';
import { Console } from '@woowacourse/mission-utils';
import { validateCost } from '../utils/Validation.js';
import { randomTicket } from '../utils/Random.js';

class TicketController {
  tickets;

  constructor() {
    this.tickets = 0;
  }

  async setTicketCount() {
    const cost = await Console.readLineAsync(INPUT.COST);
    validateCost(cost);
    this.tickets = ticketCount(cost);
  }

  displayTicketCount() {
    Console.print(`\n${this.tickets}${OUTPUT.TICKET}`);
  }

  displayTicketNumber() {
    Console.print(randomTicket(this.tickets));
  }
}

export default TicketController;
