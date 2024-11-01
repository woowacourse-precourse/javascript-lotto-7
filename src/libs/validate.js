import { ERROR_MESSAGE } from "./constants.js";
import { LottoError } from "./errors.js";

export function validateNumberType(input) {
  const number = Number(input);
  if (Number.isNaN(number)) {
    throw new LottoError(ERROR_MESSAGE.INVALID_NUMBER_INPUT_TYPE);
  }
  return number;
}

export function validateEmptyInput(input) {
  if (!input || input.length === 0) {
    throw new LottoError(ERROR_MESSAGE.INVALID_EMPTY);
  }
  return input;
}
