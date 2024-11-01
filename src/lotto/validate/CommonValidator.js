import {
  isBlank,
  isNull,
  isUndefined,
  isZero,
  isNumeric,
  isNumberInRange
} from '../../util/Validator.js';
import { ERROR_MESSAGE } from '../constants/Message.js';

class CommonValidator {
  validateEmptyInput(inputValue) {
    if (isBlank(inputValue)) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_EMPTY_VALUE);
    }

    if (isNull(inputValue)) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_NULL_VALUE);
    }

    if (isUndefined(inputValue)) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_UNDEFINED_VALUE);
    }
  }

  validateZeroInput(inputValue) {
    if (isZero(inputValue)) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_ZERO_VALUE);
    }
  }

  checkValidInput(inputValue) {
    this.validateEmptyInput(inputValue);
    this.validateZeroInput(inputValue);
  }

  checkValidInputValues(values) {
    values.every((value) => this.checkValidInput(value));
  }

  validateNumericInput(inputValue) {
    if (!isNumeric(inputValue)) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC(inputValue));
    }
  }

  validateNumberInRange(number, startNumber, endNumber) {
    if (!isNumberInRange(number, startNumber, endNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_NUMBER_OUT_OF_RANGE(number, startNumber, endNumber));
    }
  }
}

export default CommonValidator;