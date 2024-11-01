import BaseValidator from "./BaseValidator.js";
import _pipe from "../utils/util.js";

class AmountValidator extends BaseValidator {
  static isMultipleOfThousand(input) {
    if (input % 1000 !== 0) throw new Error("1,000원 단위 아님");
    return input;
  }

  static validate(input) {
    return _pipe(this.isEmpty, this.isNumber, this.isMultipleOfThousand)(input);
  }
}

export default AmountValidator;
