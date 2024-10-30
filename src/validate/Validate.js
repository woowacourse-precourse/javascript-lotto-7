import { ERROR_MESSAGE } from "../constant/Error.js";

class Validate {
  static validatePurchaseMoney(money) {
    if (!/^[0-9\s]*$/.test(money) || money === "")
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_NON_NUMBER);

    if (money < 1000)
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_SMALL_NUMBER);

    if (money % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_DIVIDE_THOUSAND);
  }
}

export default Validate;
