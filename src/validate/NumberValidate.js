import { ERROR_MESSAGE } from "../constant/Error.js";
import { LOTTO_DATA } from "../constant/Data.js";

class NumberValidate {
  static validateNonNumber(input) {
    const NUM_REGEX = /^[0-9\s]*$/;
    if (!NUM_REGEX.test(input) || input === "")
      throw new Error(ERROR_MESSAGE.NUMBER.ERROR_NON_NUMBER);
  }

  static validateSmallNumber(input) {
    if (input < LOTTO_DATA.lottoPrice)
      throw new Error(ERROR_MESSAGE.NUMBER.ERROR_SMALL_NUMBER);
  }

  static validateDivideThousand(input) {
    if (input % LOTTO_DATA.lottoPrice !== 0)
      throw new Error(ERROR_MESSAGE.NUMBER.ERROR_DIVIDE_THOUSAND);
  }

  static validateBonusDup(input_number, input_lotto) {
    if (input_lotto.some((lotto) => parseInt(input_number) === lotto))
      throw new Error(ERROR_MESSAGE.NUMBER.ERROR_BONUS_DUP);
  }
}

export default NumberValidate;
