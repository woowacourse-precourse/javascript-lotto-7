import {
  ERROR_MESSAGES,
  LOTTO_NUMBER_RANGE,
  WINNING_NUMBER_FORMAT_REGEX,
} from '../constants/constants.js';

const {
  INVALID_LOTTO_NUMBER,
  INVALID_DUPLICATE_NUMBERS,
  INVALID_LOTTO_NUMBER_COUNT,
  INVALID_FORMAT,
} = ERROR_MESSAGES;
const { MIN_NUMBER, MAX_NUMBER } = LOTTO_NUMBER_RANGE;

const isValidFormat = (numbers) => {
  if (!WINNING_NUMBER_FORMAT_REGEX.test(numbers)) {
    throw new Error(INVALID_FORMAT);
  }
};

const isValidRange = (number) => number >= MIN_NUMBER && number <= MAX_NUMBER;

const validateNumberCount = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(INVALID_LOTTO_NUMBER_COUNT);
  }
};

const validateUniqueNumbers = (numbers) => {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(INVALID_DUPLICATE_NUMBERS);
  }
};

const validateNumberRange = (numbers) => {
  numbers.forEach((number) => {
    if (!isValidRange(number)) {
      throw new Error(INVALID_LOTTO_NUMBER);
    }
  });
};

const validateWinningNumbers = (input) => {
  isValidFormat(input);

  const numberArray = input.split(',');

  validateNumberCount(numberArray);
  validateUniqueNumbers(numberArray);
  validateNumberRange(numberArray);

  return numberArray;
};

export default validateWinningNumbers;
