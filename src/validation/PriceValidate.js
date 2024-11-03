import { ERROR_MESSAGE, PRICE } from "../constants/error.js";
import { PRICE_NUMBER } from "../constants/message.js";
import Validate from "./Validate.js";

class PriceValidate extends Validate {
  validatePrice(price) {
    this.isEmpty(price);
    this.isZero(price);
    this.isNumber(price);
    this.#divide(price);
  }

  #divide(price) {
    if (price % PRICE_NUMBER !== 0) {
      throw new Error(ERROR_MESSAGE + PRICE.NON_DIVISIBLE_AMOUNT);
    }
  }
}

export default PriceValidate;
