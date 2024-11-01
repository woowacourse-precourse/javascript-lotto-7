import { ERROR_MESSAGES } from '../constant/constants.js';

export const validateMoney = (inputMoney) => {
  const money = Number(inputMoney);

  checkNumber(money);
  checkUnit(money);
};

const checkNumber = (money) => {
  if (isNaN(money)) {
    throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER);
  }
};

const checkUnit = (money) => {
  if (money % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT);
  }
};

export const validateWinningNumber = (numbersInput) => {
  hasSpecialSymbol(numbersInput);
  hasComma(numbersInput);

  const numbers = numbersInput.split(',').map((number) => +number);

  checkWinningNumberType(numbers);
  checkNumberCount(numbers);
  hasDuplicateNumbers(numbers);
  checkNumberRange(numbers);
};

const hasComma = (numbersInput) => {
  if (numbersInput.indexOf(',') === -1) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER.INVALID_COMMA);
  }
};

const checkNumberCount = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER.INVALID_COUNT);
  }
};

const hasDuplicateNumbers = (numbers) => {
  const uniqueValues = new Set(numbers);
  const uniqueNumbers = [...uniqueValues];

  if (numbers.length !== uniqueNumbers.length) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER.DUPLICATION_NUMBER);
  }
};

const hasSpecialSymbol = (numbersInput) => {
  if (/[^,a-zA-Z0-9\s]/g.test(numbersInput)) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER.SPECIAL_SYMBOL);
  }
};

const checkNumberRange = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 1 || numbers[i] > 45)
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER.OUT_OF_RANGE);
  }
};

const checkWinningNumberType = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]))
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER.NOT_A_NUMBER);
  }
};

export const validateBonusNumber = (bonusNumberInput, winningNumbers) => {
  const bonusNumber = Number(bonusNumberInput);

  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.NOT_A_NUMBER);
  }

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION_NUMBER);
  }

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE);
  }
};
