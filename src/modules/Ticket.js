// 사용자에게 로또 구매 금액을 입력받고 금액만큼 로또 번호를 발행해준다.

import { Console } from '@woowacourse/mission-utils';
import { INPUT, OUTPUT } from '../constants/Constants.js';
import { ticketCount } from '../utils/Calculation.js';
import { ticketArray } from '../utils/TicketNumber.js';
import Validators from '../utils/Validation.js';

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
    const cost = await Console.readLineAsync(INPUT.COST);
    this.validation(cost);
    this.#cost = cost;
  }

  validation(cost) {
    Validators.checkNumber(cost);
    Validators.checkCost(cost);
  }

  calculateTicketCount() {
    this.#tickets = ticketCount(this.#cost);
  }

  displayTicketCount() {
    Console.print(`\n${this.#tickets}${OUTPUT.TICKET}`);
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
    this.displayTicket();
  }
}

export default Ticket;
