import { CONSTANTS } from './constants.js';

export function validateAmount(amount) {
  if (isNaN(amount) || amount % CONSTANTS.LOTTO_PRICE !== 0) {
    throw new Error(CONSTANTS.ERROR_INVALID_AMOUNT);
  }
};

export function validateWinningNumbers(numbers) {
  if (numbers.length !== 6) {
    throw new Error(CONSTANTS.ERROR_INSUFFICIENT_NUMBERS);
  }

  const isWithinRange = numbers.every((num) => num >= 1 && num <= 45);
  if (!isWithinRange) {
    throw new Error(CONSTANTS.ERROR_INVALID_RANGE);
  }

  const isUnique = new Set(numbers).size === 6;
  if (!isUnique) {
    throw new Error(CONSTANTS.ERROR_INVALID_WINNING_NUMBERS);
  }
}
