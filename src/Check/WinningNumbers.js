import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, makeError } from '../View/Error.js';


const WINNING_NUMBERS_COUNT = 6;

function isValidIntegerNumber(elem) {
  const INTEGER_REGEX = /^[0-9]*$/;
  if (!INTEGER_REGEX.test(elem) || parseInt(elem) < 1 || parseInt(elem) > 45) {
    makeError(ERROR_MESSAGE.WINNING_NUMBER_TYPE);
  }

  return true;
}

function isValidWinningNumber(elem) {
  if (elem === '') makeError(ERROR_MESSAGE.WINNING_NUMBER_COMMA);
  if (isValidIntegerNumber(elem)) return parseInt(elem);
}

function makeIntegerElementList(winningNumbersString) {
  return winningNumbersString.split(',').map((elem) => {
    if (isValidWinningNumber(elem)) return parseInt(elem);
  });
}

export function getValidWinningNumberList(input) {
  if (!input.includes(',')) makeError(ERROR_MESSAGE.NEED_COMMA);
  return makeIntegerElementList(input);
}

export function getValidBonusNumber(bonusNumberString, winningNumbers) {
  if (!isValidIntegerNumber(bonusNumberString))
    makeError(ERROR_MESSAGE.WINNING_NUMBER_TYPE);
  if (winningNumbers.includes(parseInt(bonusNumberString)))
    makeError(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION);

  return parseInt(bonusNumberString);
}
