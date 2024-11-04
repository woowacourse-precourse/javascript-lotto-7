import { errorConstants, magicNumber } from '../constants/index.js';

const validateNumber = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new Error(errorConstants.NOT_A_NUMBER);
  }
};

export const isNumber = validateNumber;

export const isNotZero = (input) => {
  validateNumber(input);
  if (Number(input) === magicNumber.ZERO) {
    throw new Error(errorConstants.NOT_ZERO);
  }
};

export const isNotEmpty = (input) => {
  if (String(input).trim().length === 0) {
    throw new Error(errorConstants.NOT_EMPTY);
  }
};

export const isRightUnit = (input) => {
  validateNumber(input);
  if (Number(input) % magicNumber.BASE !== magicNumber.ZERO) {
    throw new Error(errorConstants.WRONG_UNIT);
  }
};

export const isInRange = (input) => {
  validateNumber(input);
  if (
    Number(input) < magicNumber.START_RANGE ||
    Number(input) > magicNumber.END_RANGE
  ) {
    throw new Error(errorConstants.NOT_IN_RANGE);
  }
};

export const isNotSameLottoNumber = (lottoNumbers) => (input) => {
  validateNumber(input);
  if (lottoNumbers.includes(Number(input))) {
    throw new Error(errorConstants.DUPLICATED_NUMBER);
  }
};

export const isNotDuplicated = (numbers) => {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(errorConstants.DUPLICATED_NUMBER);
  }
};

export const isValidLottoLength = (numbers) => {
  if (numbers.length !== magicNumber.LOTTO_NUM_COUNT) {
    throw new Error(errorConstants.WRONG_INPUT);
  }
};

export const areValidLottoNumbers = (numbers) => {
  numbers.forEach(validateNumber);
};

export const validateInputFormat = (input) => {
  const numbers = input.split(',').map((num) => num.trim());
  if (numbers.length !== magicNumber.LOTTO_NUM_COUNT) {
    throw new Error(errorConstants.WRONG_INPUT);
  }
  numbers.forEach(isNumber);
};
