import { LOTTO_RULE } from "../constants/rule.js";

export const isLottoLengthValid = (numbers) => numbers.length === 6;

export const isNumber = (number) => !Number.isNaN(Number(number));

export const isInteger = (number) => Number.isInteger(Number(number));

export const isInRange = (number) =>
  number >= LOTTO_RULE.MIN_NUMBER && number <= LOTTO_RULE.MAX_NUMBER;

export const hasDuplicate = (array) => new Set(array).size !== array.length;
