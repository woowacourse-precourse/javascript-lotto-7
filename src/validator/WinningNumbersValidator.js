import _pipe from "../utils/util.js";
import Validator from "./Validator.js";

class WinningNumbersValidator extends Validator {
  static isLengthSix(input) {
    if (input.length < 6) throw new Error("로또 번호는 6개의 숫자여야 합니다.");
    return input;
  }

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
