import { ERROR_MESSAGE } from './errorMessages.js';

const isWinningNumbersEmptyInput = (winningNumbersInput) => winningNumbersInput !== '';

const validateWinningNumbers = (winningNumbers) => {
  if (!isWinningNumbersEmptyInput(winningNumbers)) {
    throw new Error(ERROR_MESSAGE.EMPTY_INPUT_WINNING_NUMBERS);
  }
};

export { validateWinningNumbers };
