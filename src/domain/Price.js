import { PRICE_NUMBER } from "../constants/lotto.js";
import PriceValidate from "../validation/PriceValidate.js";

class Price {
  #price;

  constructor(price) {
    this.#validate(price);
    this.#price = this.#parseNumber(price);
  }

  #validate(price) {
    const validate = new PriceValidate();
    validate.validatePrice(price);
  }

  #parseNumber(price) {
    return Number(price);
  }

  get count() {
    return this.#price / PRICE_NUMBER;
  }
}

export default Price;
