import { ERROR_MESSAGES, LOTTO } from '../constant/constants.js';

export const validateMoney = (inputMoney) => {
  checkEmpty(inputMoney);
  const money = Number(inputMoney);

  checkNumber(money, ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER);
  checkUnit(money);
};

const checkEmpty = (input) => {
  if (input === '' || input === undefined || input === null) {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const checkNumber = (input, message) => {
  if (isNaN(input)) {
    throw new Error(message);
  }
};

const checkUnit = (money) => {
  if (money % LOTTO.LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT);
  }
};

export const validateWinningNumber = (numbersInput) => {
  checkEmpty(numbersInput);
  hasSpecialSymbol(numbersInput);
  hasComma(numbersInput);

  const numbers = numbersInput
    .split(LOTTO.LOTTO_NUMBER_SEPARATOR)
    .map((number) => +number);

  checkWinningNumberType(numbers);
  checkNumberCount(numbers);
  hasDuplicateNumbers(numbers);
  checkNumbersRange(numbers);
};

const hasComma = (numbersInput) => {
  if (numbersInput.indexOf(LOTTO.LOTTO_NUMBER_SEPARATOR) === -1) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER.INVALID_COMMA);
  }
};

const checkNumberCount = (numbers) => {
  if (numbers.length !== LOTTO.LOTTO_NUMBER_COUNT) {
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

const checkNumbersRange = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    checkNumberRange(numbers[i], ERROR_MESSAGES.WINNING_NUMBER.OUT_OF_RANGE);
  }
};

const checkNumberRange = (number, message) => {
  if (
    number < LOTTO.LOTTO_NUMBER_RANGE_MIN ||
    number > LOTTO.LOTTO_NUMBER_RANGE_MAX
  ) {
    throw new Error(message);
  }
};

const checkWinningNumberType = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    checkNumber(numbers[i], ERROR_MESSAGES.WINNING_NUMBER.NOT_A_NUMBER);
  }
};

export const validateBonusNumber = (bonusNumberInput, winningNumbers) => {
  checkEmpty(bonusNumberInput);
  const bonusNumber = Number(bonusNumberInput);
  checkNumber(bonusNumber, ERROR_MESSAGES.BONUS_NUMBER.NOT_A_NUMBER);

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION_NUMBER);
  }
  checkNumberRange(bonusNumber, ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE);
};
