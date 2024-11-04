//@ts-check

import { _pipe } from '../util/util.js';
import throwError from '../util/errorThrower.js';
import { LOTTO_CONFIG } from '../constants/lotto.js';
import { PURCHASE_ERROR_MESSAGE } from '../constants/errorMessage.js';

/**@param {string} input */
const checkEmpty = (input) => {
  if (!input.trim()) throwError(PURCHASE_ERROR_MESSAGE.NO_INPUT);

  return Number(input);
};

/**@param {number} input */
const checkCurrencyUnit = (input) => {
  if (input % LOTTO_CONFIG.PRICE_PER !== 0)
    throwError(PURCHASE_ERROR_MESSAGE.NOT_THOUSAND_UNIT);

  return input;
};

/**@param {number} input */
const checkNaN = (input) => {
  if (isNaN(input)) throwError(PURCHASE_ERROR_MESSAGE.NOT_NUMBER);

  return input;
};

/**@param {number} input */
const checkNegativeNumber = (input) => {
  if (input <= 0) throwError(PURCHASE_ERROR_MESSAGE.LESS_THAN_ZERO);

  return input;
};

const validateLottoPurchase = _pipe(
  checkEmpty,
  checkNaN,
  checkCurrencyUnit,
  checkNegativeNumber
);

export { validateLottoPurchase };
