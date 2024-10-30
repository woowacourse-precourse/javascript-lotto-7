import { ERROR_MESSAGE } from "../constant/Error.js";

class Validate {
  static validatePurchaseMoney(money) {
    if (!/^[0-9\s]*$/.test(money))
      throw new Error(ERROR_MESSAGE.ERROR_NON_NUMBER);
  }
}

export default Validate;
