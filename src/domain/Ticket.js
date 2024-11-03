import { randomNumber } from "../utils/randomNumber.js";

class Ticket {
  #count;
  #tickets = [];

  constructor(count) {
    this.#count = +count;
  }
}

export default Ticket;
