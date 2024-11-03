import { ERROR_MESSAGES, LOTTO } from '../constant/constants.js';

export const validateMoney = (inputMoney) => {
  checkEmpty(inputMoney);
  const money = Number(inputMoney);

  checkNumber(money);
  checkUnit(money);
};

const checkEmpty = (input) => {
  if (input === '' || input === undefined || input === null) {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const checkNumber = (money) => {
  if (isNaN(money)) {
    throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER);
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
  checkNumberRange(numbers);
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

const checkNumberRange = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i] < LOTTO.LOTTO_NUMBER_RANGE_MIN ||
      numbers[i] > LOTTO.LOTTO_NUMBER_RANGE_MAX
    )
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
  checkEmpty(bonusNumberInput);
  const bonusNumber = Number(bonusNumberInput);
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.NOT_A_NUMBER);
  }
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION_NUMBER);
  }
  if (
    bonusNumber < LOTTO.LOTTO_NUMBER_RANGE_MIN ||
    bonusNumber > LOTTO.LOTTO_NUMBER_RANGE_MAX
  ) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE);
  }
};
