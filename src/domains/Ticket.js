import { Console } from '@woowacourse/mission-utils';
import { INPUT, OUTPUT, FORMAT } from '../constants/Constants.js';
import { ticketCount } from '../utils/Calculation.js';
import { ticketArray } from '../utils/TicketNumber.js';
import ValidateCost from '../validator/ValidateCost.js';

class Ticket {
  #tickets;
  #cost;
  #lottos;

  constructor() {
    this.#tickets = 0;
    this.#cost = 0;
    this.#lottos = [];
  }

  async inputCost() {
    const cost = (await Console.readLineAsync(INPUT.COST)).trim();
    this.validateCost(Number(cost));
    this.#cost = Number(cost);
  }

  getCost() {
    return this.#cost;
  }

  validateCost(cost) {
    ValidateCost.checkNumber(cost);
    ValidateCost.checkInteger(cost);
    ValidateCost.checkCost(cost);
  }

  calculateTicketCount() {
    this.#tickets = ticketCount(this.#cost);
  }

  displayTicketCount() {
    Console.print(`${FORMAT.NEWLINE}${this.#tickets}${OUTPUT.TICKET}`);
  }

  getTicket() {
    this.#lottos = ticketArray(this.#tickets);
    return this.#lottos;
  }

  displayTicket() {
    this.#lottos.forEach((arr) => {
      Console.print(`[${arr.join(', ')}]`);
    });
  }

  async startGetTicket() {
    await this.inputCost();
    this.calculateTicketCount();
    this.displayTicketCount();
  }
}

export default Ticket;
