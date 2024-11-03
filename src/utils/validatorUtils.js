import {
  COST_UNIT,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBER_FORMAT,
} from '../constants/constraints.js';

export const isValidatePositiveInteger = (number) => {
  return !isNaN(number) && Number.isInteger(number) && number > 0;
};

export const isWinningNumbersFormat = (number) => {
  return LOTTO_NUMBER_FORMAT.test(number);
};

export const isNumbersInRange = (number) => {
  return number >= LOTTO_MIN_NUMBER && number <= LOTTO_MAX_NUMBER;
};

export const isCostInUnits = (cost) => {
  return cost % COST_UNIT === 0;
};
