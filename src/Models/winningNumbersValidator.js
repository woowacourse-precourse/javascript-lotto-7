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

// 중복된 숫자 되면 안됨
const isWinningNumberDuplicated = (winningNumbers) => {
  const arr = [...winningNumbers];
  const onlyNumber = arr.filter((number) => !isNaN(number) === true);
  const uniqueWinningNumbers = new Set(onlyNumber);

  return onlyNumber.length === uniqueWinningNumbers.size;
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

  if (!isWinningNumberDuplicated(winningNumbers)) {
    throw new Error(ERROR_MESSAGE.UNIQUE_NUMBER);
  }
};

export { validateWinningNumbers };
