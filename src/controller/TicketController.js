import { INPUT, OUTPUT } from '../constants/Constants.js';
import { ticketCount } from '../utils/Calculation.js';
import { Console } from '@woowacourse/mission-utils';
import { validateCost } from '../utils/Validation.js';
import { ticketArray } from '../utils/Random.js';

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

  async displayTicketCount() {
    await this.setTicketCount();
    Console.print(`\n${this.tickets}${OUTPUT.TICKET}`);
  }

  displayTicketNumber() {
    const numberArray = ticketArray(this.tickets);
    numberArray.forEach((arr) => {
      Console.print(arr);
    });
  }

  async getTicket() {
    await this.displayTicketCount();
    this.displayTicketNumber();
  }
}

export default TicketController;
