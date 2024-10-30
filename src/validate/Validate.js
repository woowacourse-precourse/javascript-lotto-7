import { ERROR_MESSAGE } from "../constant/Error.js";

class Validate {
  static validateNonNumber(input) {
    if (!/^[0-9\s]*$/.test(input) || input === "")
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_NON_NUMBER);
  }

  static validateSmallNumber(input) {
    if (input < 1000)
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_SMALL_NUMBER);
  }

  static validateDivideThousand(input) {
    if (input % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_DIVIDE_THOUSAND);
  }
}

export default Validate;
