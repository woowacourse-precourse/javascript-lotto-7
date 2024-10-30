import { ERROR_MESSAGE } from "../constant/Error.js";

class Validate {
  static validatePurchaseMoney(money) {
    if (!/^[0-9\s]*$/.test(money) || money === "")
      throw new Error(ERROR_MESSAGE.ERROR_NON_NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.ERROR_SMALL_NUMBER);

    if (money % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.ERROR_DIVIDE_THOUSAND);
  }
}

export default Validate;
