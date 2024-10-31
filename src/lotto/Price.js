import CustomError from "../CustomError.js";
import { LOTTO_MESSAGES, LOTTO_RULES } from "../constants/index.js";

class Price {
  constructor(price) {
    this.#validate(price);
  }

  #validate = (price) => {
    if (price % LOTTO_RULES.PRICE !== 0 || price === 0) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_PRICE);
    }

    if (price > 100000) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_MAX_PRICE);
    }
  };
}

export default Price;
