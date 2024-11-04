import { LOTTO, ERROR_MESSAGE } from '../constants/constants.js';

/**
 * @param {Object} params
 * @param {string} params.command
 * @returns {number}
 */
export const WinningNumberValidation = ({ command }) => {
  const validateNumberRange = (number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER;

  const validateDuplicates = (numbers) => new Set(numbers).size === LOTTO.SIZE;

  if (command === undefined || command.trim() === '') {
    throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
  }

  const numbers = command.split(',').map((number) => {
    const parsed = Number(number.trim());

    if (Number.isNaN(parsed)) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
    if (!Number.isInteger(parsed)) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
    return parsed;
  });

  if (numbers.length !== LOTTO.SIZE) {
    throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
  }

  if (!validateDuplicates(numbers)) {
    throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE);
  }

  if (!numbers.every(validateNumberRange)) {
    throw new Error(ERROR_MESSAGE.INVALID_RANGE);
  }

  return numbers;
};
