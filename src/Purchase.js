import { ERROR, LOTTO } from "./util/constant.js";

class Purchase {
  #amount;
  #tickets;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#tickets = this.#calculateTickets();
  };

  #validate(amount) {
    if (amount === "") {
      throw new Error(ERROR.EMPTY_QUERY);
    };

    if (isNaN(amount)) {
      throw new Error(ERROR.INVALID_INPUT);
    };

    if (amount % LOTTO.PRICE !== 0) {
      throw new Error(ERROR.INVALID_AMOUNT);
    };
  };

  #calculateTickets() {
    return this.#amount / LOTTO.PRICE;
  };

  getTicketCount() {
    return this.#tickets;
  };
};

export default Purchase;