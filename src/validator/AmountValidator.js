import Validator from "./Validator.js";
import { _pipe } from "../utils/util.js";
import throwError from "../utils/throwError.js";
import { ERROR_MESSAGES } from "../constants/messages.js";
import LOTTO from "../constants/lotto.js";

class AmountValidator extends Validator {
  static isMultipleOfThousand(input) {
    if (input % LOTTO.AMOUNT_UNIT !== 0)
      throwError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND);
    return input;
  }

  static validate(input) {
    return _pipe(
      this.isEmpty,
      this.isNumber,
      this.isNagativeNumber,
      this.isZero,
      this.isMultipleOfThousand
    )(input);
  }
}

export default AmountValidator;
