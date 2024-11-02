import { Random } from '@woowacourse/mission-utils';

class Ticket {
  #tickets = 0;

  #countTicek = [];

  constructor(money) {
    this.#initTicketCount(money);
    for (let i; i < this.#countTicek; i += 1) {
      this.#tickets.push(this.#purchaseTicket());
    }
  }

  #initTicketCount(money) {
    this.#countTicek = money / 1000;
  }

  #purchaseTicket() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getTickets() {
    return this.#tickets;
  }
}

export default Ticket;
