import { randomNumber } from "../utils/randomNumber.js";

class Ticket {
  #count;
  #tickets = [];

  constructor(count) {
    this.#count = +count;
    this.#generateTickets();
  }

  #generateTickets() {
    this.#tickets = Array.from({ length: this.#count }, () =>
      randomNumber().sort((a, b) => a - b)
    );
  }

  get results() {
    return this.#tickets;
  }
}

export default Ticket;
