import { ERROR_MESSAGE } from '../constants/message.js';
import { GAME_RULES } from '../constants/gameRule.js';
import { throwError } from '../utils/console.js';

const validate = {
  validateEmpty(price) {
    if (price.trim() === '') {  
      throwError(ERROR_MESSAGE.EMPTY_INPUT);
    }
  },

  validateType(price) {
    if (!/[0-9]/.test(price)) {
      throwError(ERROR_MESSAGE.INVALID_AMOUNT_FORMAT); 
    }

    if (!/^\d+$/.test(price)) {
      throwError(ERROR_MESSAGE.AMOUNT_CONTAINS_NON_NUMERIC);
    }
  },

  validatePositiveInteger(price) {
    const parsedPrice = Number(price);
    if (parsedPrice <= 0 || parsedPrice === 0) {
      throwError(ERROR_MESSAGE.INVALID_POSITIVE_INTEGER);
    }
  },

  validateUnit(price) {
    if (Number(price) % GAME_RULES.CURRENCY_UNIT !== 0) {
      throwError(ERROR_MESSAGE.INVALID_AMOUNT_UNIT);
    }
  },
};

function validatePurchaseAmount(price) {
  validate.validateEmpty(price);
  validate.validateType(price);
  validate.validatePositiveInteger(price);
  validate.validateUnit(price);
}

export default validatePurchaseAmount;