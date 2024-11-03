//@ts-check

import { WINNING_NUMBER_ERROR_MESSAGE } from '../constants/errorMessage.js';
import throwError from '../util/errorThrower.js';
import { _pipe } from '../util/util.js';

/**@todo 당첨번호 입력 시 011과 11이 같다고 표시됨. 처리 필요 */

/**@param {number[]} input */
const checkEmpty = (input) => {
  if (input.length === 0) throwError(WINNING_NUMBER_ERROR_MESSAGE.NO_INPUT);

  return input;
};

/**@param {number[]} input */
const checkRange = (input) => {
  if (input.some((number) => number <= 0 || number > 45))
    throwError(WINNING_NUMBER_ERROR_MESSAGE.OUT_OF_RANGE);

  return input;
};

/**@param {number[]} input */
const checkNaN = (input) => {
  if (
    input.some((number) => typeof number !== 'number' || Number.isNaN(number))
  )
    throwError(WINNING_NUMBER_ERROR_MESSAGE.NOT_NUMBER);

  return input;
};

/**@param {number[]} input */
const checkDuplicate = (input) => {
  if (input.length !== new Set(input).size)
    throwError(WINNING_NUMBER_ERROR_MESSAGE.DUPLICATE);

  return input;
};

/**@param {number[]} input */
const checkValidLength = (input) => {
  if (input.length !== 6)
    throwError(WINNING_NUMBER_ERROR_MESSAGE.INVALID_LENGTH);

  return input;
};

/**@param {number[]} input */
const checkIsInteger = (input) => {
  if (input.some((number) => Number.isInteger(number) === false))
    throwError(WINNING_NUMBER_ERROR_MESSAGE.IS_Integer);

  return input;
};

const validateWinningNumber = _pipe(
  checkEmpty,
  checkNaN,
  checkIsInteger,
  checkRange,
  checkDuplicate,
  checkValidLength
);

export { validateWinningNumber };
