//@ts-check
import { BONUS_NUMBER_ERROR_MESSAGE } from '../constants/errorMessage.js';
import throwError from '../util/errorThrower.js';
import { _pipe } from '../util/util.js';

/**@param {string} input */
const checkEmpty = (input) => {
  if (!input.trim()) throwError(BONUS_NUMBER_ERROR_MESSAGE.NO_INPUT);
  return Number(input);
};

/**@param {number} input */
const checkNaN = (input) => {
  if (typeof input !== 'number' || Number.isNaN(input))
    throwError(BONUS_NUMBER_ERROR_MESSAGE.NOT_NUMBER);
  return input;
};

/**@param {number} input */
const checkRange = (input) => {
  if (input < 1 || Number(input) > 45)
    throwError(BONUS_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE);
  return input;
};

/**@param {number} input */
const checkIsInteger = (input) => {
  if (!Number.isInteger(input))
    throwError(BONUS_NUMBER_ERROR_MESSAGE.IS_Integer);
  return input;
};

/**
 * @param {number} input
 * @param {number[]} winningNumbers
 */
const checkDuplicate = (input, winningNumbers) => {
  if (winningNumbers.includes(input))
    throwError(BONUS_NUMBER_ERROR_MESSAGE.DUPLICATE);

  return input;
};

/**
 * @param {string} input
 * @param {number[]} winningNumbers
 * */
const validateBonusNumber = (input, winningNumbers) => {
  _pipe(checkEmpty, checkNaN, checkRange, checkIsInteger, (number) =>
    checkDuplicate(number, winningNumbers)
  )(input);
};
export { validateBonusNumber };
