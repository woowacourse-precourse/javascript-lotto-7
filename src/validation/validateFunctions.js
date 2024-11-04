import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, NUMBERS } from './constants.js';

const toThrowNewError = (condition, errorMessage) => {
  if (condition) {
    throw new Error(`[ERROR] ${errorMessage}\n`);
  }
};

const StringHasSpace = (string) => {
  toThrowNewError(string.includes(' '), ERROR_MESSAGES.SPACE_ERROR);
};

const EmptyString = (string) => {
  toThrowNewError(string === '', ERROR_MESSAGES.EMPTY_STRING);
};

const Integer = (string) => {
  const convertedString = Number(string);
  toThrowNewError(
    !Number.isInteger(convertedString),
    ERROR_MESSAGES.NON_INTEGER,
  );
};

const Positive = (string) => {
  const convertedString = Number(string);
  toThrowNewError(
    !(convertedString >= NUMBERS.ONE_LOTTO_PRICE),
    ERROR_MESSAGES.MINIMUM_POSITIVE,
  );
};

const canDivide = (string) => {
  const convertedString = Number(string);
  toThrowNewError(
    !(convertedString % NUMBERS.ONE_LOTTO_PRICE === 0),
    ERROR_MESSAGES.DIVISIBLE_BY_1000,
  );
};

const checkNumbersCount = (string) => {
  const separatorCount = string
    .split('')
    .filter((char) => char === NUMBERS.SEPARATOR).length;
  const numbersCount = string.split(NUMBERS.SEPARATOR).filter(Boolean).length;

  toThrowNewError(
    numbersCount - 1 !== separatorCount ||
      numbersCount !== NUMBERS.NUMBERS_COUNT,
    ERROR_MESSAGES.FORMAT_ERROR,
  );
};

const AllInteger = (string) => {
  const numbers = string.split(NUMBERS.SEPARATOR).map(Number);
  toThrowNewError(
    !numbers.every((number) => Number.isInteger(number)),
    ERROR_MESSAGES.NON_INTEGER,
  );
};

const checkRange = (string) => {
  const numbers = string.split(NUMBERS.SEPARATOR).map(Number);
  toThrowNewError(
    !numbers.every(
      (number) => number >= NUMBERS.MIN_RANGE && number <= NUMBERS.MAX_RANGE,
    ),
    ERROR_MESSAGES.RANGE_ERROR,
  );
};

const checkDuplicateNumbers = (string) => {
  const numbers = new Set(string.split(NUMBERS.SEPARATOR).map(Number));
  toThrowNewError(
    numbers.size !== NUMBERS.NUMBERS_COUNT,
    ERROR_MESSAGES.DUPLICATE_ERROR,
  );
};

export const bonusNumberAlreadyExist = (bonusNumber, answerNumbers) => {
  toThrowNewError(
    answerNumbers.includes(Number(bonusNumber)),
    ERROR_MESSAGES.BONUS_DUPLICATE_ERROR,
  );
};

export const validateLottoBuyPrice = (lottoBuyPrice) => {
  try {
    StringHasSpace(lottoBuyPrice);
    EmptyString(lottoBuyPrice);
    Integer(lottoBuyPrice);
    Positive(lottoBuyPrice);
    canDivide(lottoBuyPrice);
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};

export const validateLottoAnswerNumbers = (lottoAnswerNumbers) => {
  try {
    StringHasSpace(lottoAnswerNumbers);
    EmptyString(lottoAnswerNumbers);
    checkNumbersCount(lottoAnswerNumbers);
    AllInteger(lottoAnswerNumbers);
    checkRange(lottoAnswerNumbers);
    checkDuplicateNumbers(lottoAnswerNumbers);
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};

export const validateLottoBonusNumber = (lottoBonusNumber, rest) => {
  try {
    StringHasSpace(lottoBonusNumber);
    EmptyString(lottoBonusNumber);
    Integer(lottoBonusNumber);
    checkRange(lottoBonusNumber);
    bonusNumberAlreadyExist(lottoBonusNumber, rest);
    return true;
  } catch (error) {
    Console.print(error.message);
    return false;
  }
};
