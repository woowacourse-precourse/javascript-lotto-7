import { Random } from "@woowacourse/mission-utils";
import { LOTTO_RULE } from "../constants/rule.js";

class Ticket {
  #ticket;

  constructor() {
    this.#ticket = Random.pickUniqueNumbersInRange(
      LOTTO_RULE.MIN_NUMBER,
      LOTTO_RULE.MAX_NUMBER,
      6,
    ).sort((a, b) => a - b);
  }

  getTicketString() {
    return `[${this.#ticket.join(", ")}]`;
  }

  getTicketNumbers() {
    return [...this.#ticket];
  }
}

export default Ticket;
