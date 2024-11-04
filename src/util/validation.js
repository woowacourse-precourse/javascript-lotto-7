import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/rule.js';
import { throwWoowaError } from './error.js';

export const isNumber = (num) => !Number.isNaN(num);

export const isInteger = (num) => Number.isInteger(num);

export const isInRange = (num, min, max) => num >= min && num <= max;

export const validateLottoNumber = (number) => {
  if (!isNumber(number)) {
    throwWoowaError(ERROR_MESSAGE.invalidNumberType);
  }

  if (!isInteger(number)) {
    throwWoowaError(ERROR_MESSAGE.invalidIntegerType);
  }

  if (!isInRange(number, RULE.LOTTO.NUMBER_MIN, RULE.LOTTO.NUMBER_MAX)) {
    throwWoowaError(ERROR_MESSAGE.invalidNumberInRange);
  }
};
