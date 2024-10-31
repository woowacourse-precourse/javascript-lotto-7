import { COMMON_ERRORS, VALIDATION_ERRORS, LOTTO_PRICE_PER_TICKET, MATCH_PRICE, MATCH_CODE } from '../constants/constants.js';

const validateNumber = (price) => {
  if (isNaN(price)) {
    throw new Error(COMMON_ERRORS.NUMBER);
  }
};

const validateInteger = (price) => {
  if (!Number.isInteger(price)) {
    throw new Error(COMMON_ERRORS.INTEGER);
  }
};

const validateLottoAmountRange = (price) => {
  if (price < LOTTO_PRICE_PER_TICKET || price > MATCH_PRICE[MATCH_CODE.SIX]) {
    throw new Error(VALIDATION_ERRORS.PURCHASE_PRICE.RANGE);
  }
};

const validateIsThousandUnit = (price) => {
  if (price % LOTTO_PRICE_PER_TICKET !== 0) {
    throw new Error(VALIDATION_ERRORS.PURCHASE_PRICE.THOUSAND);
  }
};

const validateLottoPurchasePrice = (price) => {
  validateNumber(price);
  validateInteger(price);
  validateLottoAmountRange(price);
  validateIsThousandUnit(price);
};

export default validateLottoPurchasePrice;
