import { ERROR, LOTTO } from "./util/constant.js";
import Validate from "./ValidateInput.js";

class Purchase {
  #amount;
  #tickets;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#tickets = this.#calculateTickets();
  };

  #validate(amount) {
    Validate.validateEmptyInput(amount);
    Validate.validateNumber(amount);
    Validate.validateInputAmount(amount);
  };

  #calculateTickets() {
    return this.#amount / LOTTO.PRICE;
  };

  getInputAmount() {
    return this.#amount;
  }

  getTicketCount() {
    return this.#tickets;
  };
};

export default Purchase;