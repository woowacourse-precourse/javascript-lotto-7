import { CONSTANT_LOTTO, NUMBERS, } from "./const.js";

export const isOutOfRange = (number) =>
  number < CONSTANT_LOTTO.MIN_NUMBER || number > CONSTANT_LOTTO.MAX_NUMBER;

export const isNotANumber = (number) => Number.isNaN(+number);

export const getRate = (prizePrice, purchasePrice) => {
  if (prizePrice === NUMBERS.ZERO || purchasePrice === NUMBERS.ZERO) {
    return NUMBERS.ZERO;
  }
  return (prizePrice / purchasePrice) * NUMBERS.HUNDRED;
};
