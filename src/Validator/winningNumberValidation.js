import { SEPARATE_NUMBER } from '../Constant/regexp.js';
import { ERROR_MESSAGES } from '../Constant/error.js';
import { SYMBOLS } from '../Constant/symbols.js';

const SEPARATE_COMMA = (winningNumber) => {
  return SEPARATE_NUMBER.test(winningNumber);
};

const WINNING_NUMBER_SIX = (winningNumberArray) => {
  return winningNumberArray.length !== 6;
};

const WINNING_NUMBER_DUPLICATION = (winningNumberArray) => {
  return winningNumberArray.some(
    (item, index) => winningNumberArray.indexOf(item) !== index,
  );
};
const WINNING_NUMBER_RANGE = (winningNumberArray) => {
  return winningNumberArray.every((number) => number >= 1 && number <= 45);
};

export const WINNING_NUMBER_VALIDATION = (winningNumber) => {
  const winningNumberArray = winningNumber.split(SYMBOLS.comma).map(Number);

  if (!SEPARATE_COMMA(winningNumber)) {
    throw new Error(ERROR_MESSAGES.IS_SEPARATE_COMMA);
  }
  if (WINNING_NUMBER_SIX(winningNumberArray)) {
    throw new Error(ERROR_MESSAGES.IS_WINNING_NUMBER_SIX);
  }
  if (WINNING_NUMBER_DUPLICATION(winningNumberArray)) {
    throw new Error(ERROR_MESSAGES.IS_WINNING_NUMBER_DUPLICATION);
  }
  if (!WINNING_NUMBER_RANGE(winningNumberArray)) {
    throw new Error(ERROR_MESSAGES.IS_WINNING_NUMBER_RANGE);
  }
};
