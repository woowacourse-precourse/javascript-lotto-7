import { ERROR_MESSAGE } from "./constants.js";

export function validateNumberType(input) {
  const number = Number(input);
  if (Number.isNaN(number)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INPUT_TYPE);
  }
  return number;
}
