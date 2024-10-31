import { COMMON_ERRORS, LOTTO_CONFIG } from '../constants/constants.js';

export const validateNumber = (number) => {
  if (isNaN(number)) {
    throw new Error(COMMON_ERRORS.NUMBER);
  }
};

export const validateAllNumber = (numbers) => {
  const isNumber = (number) => isNaN(number);
  if (numbers.some(isNumber)) {
    throw new Error(COMMON_ERRORS.NUMBER);
  }
}

export const validateInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error(COMMON_ERRORS.INTEGER);
  }
};

export const validateAllInteger = (numbers) => {
  const isInteger = (number) => !Number.isInteger(number);
  if (numbers.some(isInteger)) {
    throw new Error(COMMON_ERRORS.INTEGER);
  }
};

const isOutOfRange = (number) => {
  return number < LOTTO_CONFIG.NUMBER_RANGE.MIN || number > LOTTO_CONFIG.NUMBER_RANGE.MAX;
}

export const validateNumberRange = (number) => {
  if (isOutOfRange(number)) {
    throw new Error(COMMON_ERRORS.RANGE);
  }
}

export const validateAllNumberRange = (numbers) => {
  const checkRange = (number) => isOutOfRange(number);
  if (numbers.some(checkRange)) {
    throw new Error(COMMON_ERRORS.RANGE);
  }
};
