import Validator from "./Validator.js";
import { _pipe } from "../utils/util.js";

class WinningNumbersValidator extends Validator {
  static validate(input) {
    return _pipe(
      this.isEmpty,
      this.isSeparatedFormat,
      (input) => input.map((item) => this.isNumberInRange(this.isNumber(item))),
      this.isLengthSix,
      this.isDuplicate
    )(input);
  }
}

export default WinningNumbersValidator;
