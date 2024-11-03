import LOTTO from "../constants/lotto.js";
import { ERROR_MESSAGES } from "../constants/messages.js";
import throwError from "../utils/throwError.js";

class Validator {
  static isEmpty(input) {
    if (!input) throwError(ERROR_MESSAGES.EMPTY_INPUT);
    return input;
  }

  static isSeparatedFormat(input, separator = ",") {
    const values = input.split(separator).map((value) => value.trim());
    if (values.length <= 1) throwError(ERROR_MESSAGES.INVALID_SEPARATOR);
    return values;
  }

  static isNumber(input) {
    if (isNaN(input)) throwError(ERROR_MESSAGES.NON_NUMERIC);
    return Number(input);
  }

  static isNagativeNumber(input) {
    if (input < 0) throwError(ERROR_MESSAGES.NEGATIVE_VALUE);
    return input;
  }

  static isZero(input) {
    if (input === 0) throwError(ERROR_MESSAGES.ZERO_VALUE);
    return input;
  }

  static isNumberInRange(
    input,
    min = LOTTO.MIN_NUMBER,
    max = LOTTO.MAX_NUMBER
  ) {
    if (input < min || input > max) throwError(ERROR_MESSAGES.OUT_OF_RANGE);
    return input;
  }

  static isLengthSix(input) {
    if (input.length !== LOTTO.COUNT)
      throwError(ERROR_MESSAGES.INCORRECT_LENGTH);
    return input;
  }

  static isDuplicate(input) {
    if (new Set(input).size !== input.length)
      throwError(ERROR_MESSAGES.DUPLICATE_FOUND);
    return input;
  }
}

export default Validator;
