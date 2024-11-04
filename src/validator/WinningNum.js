import { ERROR_MESSAGE } from "../constants/Message.js";

const validateNumberOnly = (winningNumber) => {
  const isNumbers = winningNumber.every((num) => Number.isInteger(num));

  if (!isNumbers) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT_MONEY_TYPE);
  }
};

const validateNumberRange = (winningNumber) => {
  const isInRange = winningNumber.every((num) => 1 <= num && num <= 45);

  if (!isInRange) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
  }
};

const validateNumberLength = (winningNumber) => {
  const setNumbers = new Set(winningNumber);

  if (setNumbers.size !== winningNumber.length) {
    throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_NUMBER);
  }
};

export const validateWinningNumber = (winningNumber) => {
  if (!Array.isArray(winningNumber)) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT);
  }

  validateNumberOnly(winningNumber);
  validateNumberRange(winningNumber);
  validateNumberLength(winningNumber);
};
