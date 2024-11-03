import { PRICE_NUMBER } from "../constants/message.js";
import PriceValidate from "../validation/PriceValidate.js";

class Price {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
  }

  #validate(price) {
    const validate = new PriceValidate();
    validate.validatePrice(price);
  }

  get count() {
    return this.#price / PRICE_NUMBER;
  }
}

export default Price;
