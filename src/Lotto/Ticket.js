import { Random } from '@woowacourse/mission-utils';

class Ticket {
  #tickets = [];

  constructor(money) {
    for (let i = 0; i < Math.floor(this.#initTicketCount(money)); i += 1) {
      this.#tickets.push(this.#purchaseTicket());
    }
  }

  #initTicketCount(money) {
    return money / 1000;
  }

  #purchaseTicket() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  getTickets() {
    // 각 티켓을 정렬하여 반환
    return this.#tickets.map((ticket) => ticket.sort((a, b) => a - b));
  }
}

export default Ticket;
