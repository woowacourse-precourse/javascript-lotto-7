import { COMMON_ERRORS, LOTTO_CONFIG } from '../constants/constants.js';
import validateCondition from '../utils/validateCondition.js';

const isNotNumber = (number) => isNaN(number);
const isNotInteger = (number) => !Number.isInteger(number);
const isOutOfRange = (number) => number < LOTTO_CONFIG.NUMBER_RANGE.MIN || number > LOTTO_CONFIG.NUMBER_RANGE.MAX;

const validationConditions = {
  validateNumber: [isNotNumber, COMMON_ERRORS.NUMBER],
  validateInteger: [isNotInteger, COMMON_ERRORS.INTEGER],
  validateNumberRange: [isOutOfRange, COMMON_ERRORS.RANGE],
};

const validateSingle = (value, [condition, errorMessage]) => {
  validateCondition(condition(value), errorMessage);
};

const validateAll = (values, [condition, errorMessage]) => {
  validateCondition(values.some((value) => condition(value)), errorMessage);
};

export const validateNumber = (number) => validateSingle(number, validationConditions.validateNumber);
export const validateAllNumber = (numbers) => validateAll(numbers, validationConditions.validateNumber);

export const validateInteger = (number) => validateSingle(number, validationConditions.validateInteger);
export const validateAllInteger = (numbers) => validateAll(numbers, validationConditions.validateInteger);

export const validateNumberRange = (number) => validateSingle(number, validationConditions.validateNumberRange);
export const validateAllNumberRange = (numbers) => validateAll(numbers, validationConditions.validateNumberRange);
