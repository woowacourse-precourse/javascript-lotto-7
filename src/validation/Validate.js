import {
  EMPTY,
  ERROR_MESSAGE,
  MINIMUM_VALUE,
  REQUEST_NUMBER_INPUT,
  ZERO,
  LOTTO_ERROR,
} from "../constants/error.js";
import { LOTTO_VALUES } from "../constants/message.js";

class Validate {
  validate(input) {
    this.isEmpty(input);
    this.isZeroIncluded(input);
    this.isNumber(input);
  }

  isEmpty(input) {
    if (input === "") {
      throw new Error(ERROR_MESSAGE + EMPTY);
    }
  }
  isZero(input) {
    if (input === ZERO) {
      throw new Error(ERROR_MESSAGE + MINIMUM_VALUE);
    }
  }
  isNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE + REQUEST_NUMBER_INPUT);
    }
  }
  isWithinRange(input) {
    if (Number(input) >= LOTTO_VALUES.MAX) {
      throw new Error(ERROR_MESSAGE + LOTTO_ERROR.RANGE);
    }
  }
}

export default Validate;
