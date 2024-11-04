import { randomNumber } from "../utils/randomNumber.js";
import Lotto from "./Lotto.js";

class Ticket {
  #count;

  constructor(count) {
    this.#count = count;
  }

  generateTickets() {
    return Array.from({ length: this.#count }, () => {
      const numbers = randomNumber().sort((a, b) => a - b);
      return new Lotto(numbers);
    });
  }
}

export default Ticket;
