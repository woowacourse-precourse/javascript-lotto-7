import { LOTTO, ERROR_MESSAGE } from '../constants/constants.js';
/**
 * @param {Object} params
 * @param {string} params.command
 * @param {number[]} params.winningNumber
 * @returns {number}
 */
export const BonusNumberValidation = ({ command, winningNumber }) => {
  const validateNumberRange = (number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER;

  if (!command || command.trim() === '') {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS);
  }

  const number = Number(command.trim());

  if (Number.isNaN(number)) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS);
  }
  if (!Number.isInteger(number)) {
    throw new Error(ERROR_MESSAGE.INVALID_BONUS);
  }
  if (!validateNumberRange(number)) {
    throw new Error(ERROR_MESSAGE.INVALID_RANGE);
  }
  if (winningNumber.includes(number)) {
    throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE);
  }
  return number;
};
