import Validator from "./Validator.js";
import { _pipe } from "../utils/util.js";

class LottoValidator extends Validator {
  static validate(input) {
    return _pipe(
      this.isEmpty,
      (input) => input.map((item) => this.isNumberInRange(this.isNumber(item))),
      this.isLengthSix,
      this.isDuplicate
    )(input);
  }
}

export default LottoValidator;
