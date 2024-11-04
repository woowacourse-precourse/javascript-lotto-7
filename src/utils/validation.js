import { ERROR_MESSAGE } from "../constants/messages.js";
import { LOTTO_RULE } from "../constants/rule.js";

export const isInputEmpty = (input) => input.trim() === "";

export const isLottoLengthValid = (numbers) => numbers.length === 6;

export const hasDuplicate = (array) => new Set(array).size !== array.length;

export const isDividedWithUnit = (money) => money % LOTTO_RULE.PRICE === 0;

export const isNumber = (number) => !Number.isNaN(Number(number));

const isInteger = (number) => Number.isInteger(Number(number));

const isInRange = (number) => number >= LOTTO_RULE.MIN_NUMBER && number <= LOTTO_RULE.MAX_NUMBER;

export const validateLottoNumber = (number) => {
  if (!isNumber(number)) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUMBER_LOTTO);
  }
  if (!isInteger(number)) {
    throw new Error(ERROR_MESSAGE.NOT_INTEGER);
  }
  if (!isInRange(number)) {
    throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
  }
};
