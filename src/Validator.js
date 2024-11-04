import {
  ERROR_BLANK,
  ERROR_DUPLICATE,
  ERROR_NOT_A_NUMBER,
  ERROR_MULTI_OF_1000,
  ERROR_NUMBER_RANGE,
  ERROR_LENGTH_IS_NOT_6,
  throwError,
} from "./constants/errorConstants.js";

class Validator {
  static validateBlank(input) {
    if (input === "") throwError(ERROR_BLANK);
  }

  static validateNumber(input) {
    if (isNaN(input)) throwError(ERROR_NOT_A_NUMBER);
  }

  static validateUnit(input) {
    if (input % 1000 !== 0) throwError(ERROR_MULTI_OF_1000);
    if (input / 1000 < 1) throwError(ERROR_MULTI_OF_1000);
  }

  static validateRangeFrom1To45(input) {
    if (input > 45 || input < 1) throwError(ERROR_NUMBER_RANGE);
  }

  static validateLengthIsSix(inputs) {
    if (inputs.length !== 6) throwError(ERROR_LENGTH_IS_NOT_6);
  }

  static validateUnique(inputs) {
    if (inputs.length !== new Set(inputs).size) throwError(ERROR_DUPLICATE);
  }

  static validateDuplicateInArray(arr, item) {
    if (arr.includes(item)) throwError(ERROR_DUPLICATE);
  }
}

export default Validator;
