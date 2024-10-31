import { ERROR_MESSAGE } from "../constant/Error.js";
import { LOTTO_DATA } from "../constant/Data.js";

class NumberValidate {
  static validateNonNumber(input) {
    if (!/^[0-9\s]*$/.test(input) || input === "")
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_NON_NUMBER);
  }

  static validateSmallNumber(input) {
    if (input < LOTTO_DATA.lottoPrice)
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_SMALL_NUMBER);
  }

  static validateDivideThousand(input) {
    if (input % LOTTO_DATA.lottoPrice !== 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_MONEY.ERROR_DIVIDE_THOUSAND);
  }
}

export default NumberValidate;
