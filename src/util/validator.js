import ERROR_MESSAGES from '../constant/error.js';

const MODE = Object.freeze({
  PURCHASE_AMOUNT: 'purchaseAmount',
  LOTTO_NUMBER: 'lottoNumber',
});

const EMPTY_STRING = Object.freeze('');

const COMMA = Object.freeze(',');

const isNumber = (value) => {
  if (isNaN(value)) {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }
};

const isWrongUnit = (value) => {
  if (value % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.WRONG_UNIT);
  }
};

const isInRange = (value, mode) => {
  if (mode === MODE.PURCHASE_AMOUNT && (value < 1000 || value > 100000)) {
    throw new Error(ERROR_MESSAGES.WRONG_RANGE.PURCHASE_AMOUNT);
  }

  if (mode === MODE.LOTTO_NUMBER && (value < 1 || value > 45)) {
    throw new Error(ERROR_MESSAGES.WRONG_RANGE.LOTTO_NUMBER);
  }
};

export const validatePurchaseAmount = (value) => {
  isEmpty(value);

  const purchaseAmount = Number(value);

  isNumber(purchaseAmount);
  isWrongUnit(purchaseAmount);
  isInRange(purchaseAmount, MODE.PURCHASE_AMOUNT);
};

const isDuplicateInWinningNumbers = (array) => {
  if (array.length !== new Set(array).size) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }
};

const isWrongLength = (array) => {
  if (array.length !== 6) {
    throw new Error(ERROR_MESSAGES.WRONG_LENGTH);
  }
};

const isEmpty = (value) => {
  if (value === EMPTY_STRING) {
    throw new Error(ERROR_MESSAGES.EMPTY_STRING);
  }
};

const isUsedComma = (value) => {
  if (!value.includes(COMMA)) {
    throw new Error(ERROR_MESSAGES.WRONG_FORMAT);
  }

  const commaRegex = /,/g;
  const commaCount = (value.match(commaRegex) || []).length;

  if (commaCount !== 5) {
    throw new Error(ERROR_MESSAGES.WRONG_FORMAT);
  }
};

export const validateWinningNumbers = (value) => {
  isEmpty(value);
  isUsedComma(value);

  const winningNumbers = value.split(',').map(Number);
  isWrongLength(winningNumbers);
  isDuplicateInWinningNumbers(winningNumbers);

  winningNumbers.forEach((number) => {
    isNumber(number);
    isInRange(number, MODE.LOTTO_NUMBER);
    isDecimal(number);
  });
};

const isDuplicateInBonusNumber = (value, winningNumbers) => {
  if (winningNumbers.includes(value)) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }
};

const isDecimal = (value) => {
  if (value % 1 !== 0) {
    throw new Error(ERROR_MESSAGES.DECIMAL);
  }
};

export const validateBonusNumber = (value, winningNumbers) => {
  isEmpty(value);

  const bonusNumber = Number(value);

  isNumber(bonusNumber);
  isInRange(bonusNumber, MODE.LOTTO_NUMBER);
  isDecimal(bonusNumber);
  isDuplicateInBonusNumber(bonusNumber, winningNumbers);
};
