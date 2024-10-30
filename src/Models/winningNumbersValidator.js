import { ERROR_MESSAGE } from '../Constants/errorMessages.js';

const isWinningNumbersEmptyInput = (winningNumbersInput) => winningNumbersInput !== '';

const isWinningNumbersSixDigits = (winningNumbersInput) => {
  const arr = [...winningNumbersInput];
  const onlyNumber = arr.filter((number) => !isNaN(number) === true);
  return onlyNumber.length === 6;
};

const isWinningNumbersFiveComma = (winningNumbersInput) => {
  const arr = [...winningNumbersInput];
  const onlyNumber = arr.filter((number) => number === ',');
  return onlyNumber.length === 5;
};

const validateWinningNumbers = (winningNumbers) => {
  if (!isWinningNumbersEmptyInput(winningNumbers)) {
    throw new Error(ERROR_MESSAGE.EMPTY_INPUT_WINNING_NUMBERS);
  }

  if (!isWinningNumbersSixDigits(winningNumbers)) {
    throw new Error(ERROR_MESSAGE.NUMBERS_LENGTH);
  }

  if (!isWinningNumbersFiveComma(winningNumbers)) {
    throw new Error(ERROR_MESSAGE.COMMA_COUNT);
  }
};

export { validateWinningNumbers };
