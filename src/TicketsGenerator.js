import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from "./constants/lotto.js";
import generateNumbers from "./utils/generateNumbers.js";
import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import Output from "./Output.js";

class TicketsGenerator {
  constructor(ticketCount) {
    this.tickets = [];
    this.generateTickets(ticketCount);
  }

  generateTickets(ticketCount) {
    for (let i = 0; i < ticketCount; i++) {
      const numbers = generateNumbers(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        LOTTO_NUMBERS_LENGTH
      );
      const lotto = new Lotto(numbers);
      this.tickets.push(lotto);
    }
    return this.tickets;
  }

  showTickets() {
    this.tickets.forEach((ticket) => {
      Output.printLottoNumbers(ticket.getLottoNumbers);
    });
  }
}

export default TicketsGenerator;
