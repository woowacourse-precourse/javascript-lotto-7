import Validator from "./Validator.js";
import { _pipe } from "../utils/util.js";

class BonusNumberValidator extends Validator {
  static validate(bonusNumberInput, winningNumbers) {
    return _pipe(this.isEmpty, this.isNumber, this.isNumberInRange, (input) => {
      this.isDuplicate([...winningNumbers, input]);
      return input;
    })(bonusNumberInput);
  }
}

export default BonusNumberValidator;
