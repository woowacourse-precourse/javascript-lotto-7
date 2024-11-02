import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../constants/constants.js";

class Validator {
  static isNumber(value) {
    if (isNaN(value)) {
      Console.print(ERROR_MESSAGES.INVALID_AMOUNT);
      return false;
    }
    return true;
  }

  static isAboveMinimum(value, minimum = 1000) {
    if (Number(value) < minimum) {
      Console.print(ERROR_MESSAGES.MINIMUM_AMOUNT);
      return false;
    }
    return true;
  }

  static isThousandUnit(value) {
    if (Number(value) % 1000 !== 0) {
      Console.print(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
      return false;
    }
    return true;
  }
}

export default Validator;
