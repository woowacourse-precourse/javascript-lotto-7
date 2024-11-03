import { ERROR_MESSAGE, FIND_NOT_NUMBER, USER_MESSAGE } from './constants.js';

const userInputEmpty = (input, message = '') => {
  if (!input) {
    throw new Error(`${message}${ERROR_MESSAGE.NOT_EMPTY_INPUT}`);
  }
};

const moneyValidation = (money) => {
  userInputEmpty(money, USER_MESSAGE.MONEY);

  if (FIND_NOT_NUMBER.test(money)) {
    throw new Error(`${ERROR_MESSAGE.MONEY_IS_POSITIVE_NUMBER}`);
  }

  const moneyNumber = parseInt(money, 10);
  if (moneyNumber > 100000) {
    throw new Error(`${ERROR_MESSAGE.MONEY_MAX_HUNDRED_THOUSAND}`);
  }

  if (moneyNumber < 1000 || money % 1000 !== 0) {
    throw new Error(`${ERROR_MESSAGE.MONEY_UNIT_THOUSAND}`);
  }

  return moneyNumber;
};

const lottoNumbersValidation = (numbers) => {
  userInputEmpty(numbers, USER_MESSAGE.WIN_NUMBERS);

  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_SIX);
  }

  if (numbers.length !== new Set([...numbers]).size) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_OVERLAP);
  }

  if (numbers.some((number) => number > 45 || number < 1)) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_MIN_ONE_MAX_FORTY_FIVE);
  }

  if (numbers.some((number) => FIND_NOT_NUMBER.test(number))) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_IS_POSITIVE_NUMBER);
  }
};

const winNumbersValidation = (numbers) => {
  userInputEmpty(numbers, USER_MESSAGE.WIN_NUMBERS);
  const winNumbers = numbers.split(',');

  if (winNumbers.length !== 6) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_SIX);
  }

  if (winNumbers.length !== new Set([...winNumbers]).size) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_OVERLAP);
  }

  if (winNumbers.some((number) => number > 45 || number < 1)) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_MIN_ONE_MAX_FORTY_FIVE);
  }

  if (winNumbers.some((number) => FIND_NOT_NUMBER.test(number))) {
    throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_IS_POSITIVE_NUMBER);
  }

  return winNumbers.map((number) => parseInt(number, 10));
};

const bonusNumberValidation = (number) => {
  userInputEmpty(number, USER_MESSAGE.BONUS_NUMBER);

  if (FIND_NOT_NUMBER.test(number)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER_IS_POSITIVE_NUMBER);
  }

  const parseNumber = parseInt(number, 10);
  if (parseNumber > 45 || parseNumber < 1) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBERS_IS_MIN_ONE_MAX_FORTY_FIVE);
  }

  return parseNumber;
};

export {
  moneyValidation,
  lottoNumbersValidation,
  winNumbersValidation,
  bonusNumberValidation,
};
