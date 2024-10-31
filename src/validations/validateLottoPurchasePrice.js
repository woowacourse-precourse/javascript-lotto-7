import { VALIDATE_MESSAGES, LOTTO_PRICE_PER_TICKET, MATCH_PRICE, MATCH_CODE } from '../constants/constants.js';

const validateNumber = (price) => {
  if (isNaN(price)) {
    throw new Error(VALIDATE_MESSAGES.PURCHASE_PRICE.NUMBER);
  }
};

const validateInteger = (price) => {
  if (!Number.isInteger(price)) {
    throw new Error(VALIDATE_MESSAGES.PURCHASE_PRICE.INTEGER);
  }
};

const validateLottoAmountRange = (price) => {
  if (price < LOTTO_PRICE_PER_TICKET || price > MATCH_PRICE[MATCH_CODE.SIX]) {
    throw new Error(VALIDATE_MESSAGES.PURCHASE_PRICE.RANGE);
  }
};

const validateIsThousandUnit = (price) => {
  if (price % LOTTO_PRICE_PER_TICKET !== 0) {
    throw new Error(VALIDATE_MESSAGES.PURCHASE_PRICE.THOUSAND);
  }
};

const validateLottoPurchasePrice = (price) => {
  validateNumber(price);
  validateInteger(price);
  validateLottoAmountRange(price);
  validateIsThousandUnit(price);
};

export default validateLottoPurchasePrice;
