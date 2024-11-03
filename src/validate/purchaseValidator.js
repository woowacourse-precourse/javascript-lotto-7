//@ts-check

import { _pipe } from '../util/util.js';
import throwError from '../util/errorThrower.js';
import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { LOTTO_CONFIG } from '../constants/lotto.js';

/**@param {number} input */
const checkEmpty = (input) => {
  if (!input) throwError(ERROR_MESSAGE.NO_INPUT);

  return input;
};

/**@param {number} input */
const checkCurrencyUnit = (input) => {
  if (input % LOTTO_CONFIG.PRICE_PER !== 0)
    throwError(ERROR_MESSAGE.NOT_THOUSAND_UNIT);

  return input;
};

/**@param {number} input */
const checkNaN = (input) => {
  if (isNaN(Number(input))) throwError(ERROR_MESSAGE.NOT_NUMBER);

  return input;
};

/**@param {number} input */
const checkNegativeNumber = (input) => {
  if (input <= 0) throwError(ERROR_MESSAGE.LESS_THAN_ZERO);

  return input;
};

/**@param {number} input */
const validateLottoPurchase = _pipe(
  checkEmpty,
  checkNaN,
  checkCurrencyUnit,
  checkNegativeNumber
);

export { validateLottoPurchase };
