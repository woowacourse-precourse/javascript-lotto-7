import { print, printEmptyLine } from "./util/io.js";
import EXECUTE_MESSAGE from "./util/messages/execute-message.js";
import Validate from "./Validate.js";

class Price {
  #price;
  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }

  #validate(price) {
    const validate = new Validate();
    validate.validatePrice(price);
  }

  get value() {
    return this.#price;
  }

  get lottoCount() {
    return this.#price / 1000;
  }
}

export default Price;
