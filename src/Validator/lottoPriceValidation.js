import { ERROR_MESSAGES } from '../Constant/error.js';
import { INVALID_VALUE } from '../Constant/regexp.js';

const DIVIDE_BY_ZERO = (lottoPrice) => parseInt(lottoPrice) % 1000 === 0;
const OVER_ONE_HUNDRED_THOUSAND = (lottoPrice) => parseInt(lottoPrice) > 100000;
const INVALID_INPUT = (lottoPrice) => INVALID_VALUE.test(lottoPrice);

export const LOTTO_PRICE_VALIDATION = (lottoPrice) => {
  if (INVALID_INPUT(lottoPrice)) {
    throw new Error(ERROR_MESSAGES.IS_INVALID_INPUT);
  }

  const parsedPrice = parseInt(lottoPrice);

  if (OVER_ONE_HUNDRED_THOUSAND(parsedPrice)) {
    throw new Error(ERROR_MESSAGES.IS_OVER_ONE_HUNDRED_THOUSAND);
  }
  if (!DIVIDE_BY_ZERO(parsedPrice)) {
    throw new Error(ERROR_MESSAGES.IS_DIVIDE_BY_ZERO);
  }
};
