import { VALIDATE_MESSAGES } from '../constants/constants.js';

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
  if (price < 1_000 || price > 2_000_000_000) {
    throw new Error(VALIDATE_MESSAGES.PURCHASE_PRICE.RANGE);
  }
};

const validateIsThousandUnit = (price) => {
  if (price % 1_000 !== 0) {
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
