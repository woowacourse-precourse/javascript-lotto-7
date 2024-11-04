import ERROR_MESSAGE from "./constants/errorMessages.js";

export function isInteger(input) {
  if (Number.isNaN(Number(input))) throw Error(ERROR_MESSAGE.INPUT_IS_NOT_NUMBER);
  if (input.trim().length === 0) throw Error(ERROR_MESSAGE.INPUT_IS_BLANK);
  if (input.includes('.')) throw Error(ERROR_MESSAGE.INPUT_IS_DECIMAL);
}
