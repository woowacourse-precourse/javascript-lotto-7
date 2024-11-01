import { Random } from '@woowacourse/mission-utils';
import Handler from '../utils/Handler.js';
import Validator from '../utils/Validator.js';

class Ticket {
  #tickets = 0;

  #countTicek = [];

  async initiatePurchase() {
    const money = await Handler.validateInputHandler(
      '구입금액을 입력해 주세요.',
      Validator.validateMoney,
    );
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
