import { VALIDATION_ERRORS, LOTTO_PRICE_PER_TICKET, MATCH_PRICE, MATCH_CODE } from '../constants/constants.js';
import { validateNumber, validateInteger } from './CommonValidations.js';

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

const LottoPurchasePriceValidations = (price) => {
  validateNumber(price);
  validateInteger(price);
  validateLottoAmountRange(price);
  validateIsThousandUnit(price);
};

export default LottoPurchasePriceValidations;
