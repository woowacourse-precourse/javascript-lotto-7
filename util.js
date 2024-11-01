import { CONSTANT_LOTTO } from "./const";

export const isOutOfRange = (number) =>
  number < CONSTANT_LOTTO.MIN_NUMBER || number > CONSTANT_LOTTO.MAX_NUMBER;

export const isNotANumber = (number) => Number.isNaN(+number);
