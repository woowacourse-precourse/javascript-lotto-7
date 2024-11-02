import Validator from "./Validator.js";
import { _pipe } from "../utils/util.js";
import throwError from "../utils/throwError.js";

class AmountValidator extends Validator {
  static isMultipleOfThousand(input) {
    if (input % 1000 !== 0) throwError("1,000원 단위 아님");
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
