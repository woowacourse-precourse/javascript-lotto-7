import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../constants/constants.js";

class Validator {
  static isNumber(value) {
    if (isNaN(value)) {
      Console.print(ERROR_MESSAGES.INVALID_AMOUNT);
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
    return true;
  }

  static isAboveMinimum(value, minimum = 1000) {
    if (Number(value) < minimum) {
      Console.print(ERROR_MESSAGES.MINIMUM_AMOUNT);
      throw new Error(ERROR_MESSAGES.MINIMUM_AMOUNT);
    }
    return true;
  }

  static isThousandUnit(value) {
    if (Number(value) % 1000 !== 0) {
      Console.print(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    }
    return true;
  }
}

export default Validator;
