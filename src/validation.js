import { DELIMITER, ERROR_MESSAGE } from './constant.js';

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
  if (winningNumbers.some((number) => isNaN(number))) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBER_NOT_NUMBER);
  }
};
