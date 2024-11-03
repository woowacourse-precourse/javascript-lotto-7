import Validate from "./Validate.js";
import { CONSTANT_LOTTO } from './util/const.js';

class Price {
  #price;
  constructor(price) {
    this.#validate(price);
    this.#price = +price;
  }

  #validate(price) {
    const validate = new Validate();
    validate.validatePrice(price);
  }

  get lottoCount() {
    return this.#price / CONSTANT_LOTTO.PRICE;
  }
}

export default Price;
