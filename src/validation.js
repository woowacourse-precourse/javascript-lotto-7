import { DELIMITER, NUMBER_RANGE, ERROR_MESSAGE } from './constant.js';

/**
 *
 */
export const validateAmount = (amount) => {
  if (isNaN(amount)) {
    throw new Error(ERROR_MESSAGE.AMOUNT_NOT_NUMBER);
  }

  if (amount < 0) {
    throw new Error(ERROR_MESSAGE.AMOUNT_NEGATIVE);
  }

  if (amount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.AMOUNT_NOT_THOUSAND);
  }
};

/**
 *
 */
export const validateWinningNumbers = (winningNumbers) => {
  if (
    winningNumbers.some((number) =>
      [
        !Number.isInteger(number),
        number < NUMBER_RANGE.MIN,
        number > NUMBER_RANGE.MAX,
      ].some(Boolean)
    )
  ) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBER_INVALID_RANGE);
  }
};
