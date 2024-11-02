import ERROR_MESSAGE from '../constants/ErrorConstant.js';
import LOTTO_PRICE_UNIT from '../constants/lottoConstant.js';
import ErrorHandler from './ErrorHandler.js';

class Validator {
  static validatePurchasePrice(inputPurchasePrice) {
    const purchasePrice = Number(inputPurchasePrice);

    if (Number.isNaN(purchasePrice)) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_NOT_A_NUMBER);
    }

    if (!Number.isInteger(purchasePrice)) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_NOT_INTEGER);
    }

    if (purchasePrice < 0) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_NEGATIVE);
    }

    if (purchasePrice === 0) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_IS_ZERO);
    }

    if (purchasePrice % LOTTO_PRICE_UNIT !== 0) {
      ErrorHandler.throwError(ERROR_MESSAGE.PURCHASE_PRICE_AMOUNT_UNTI_MESSAGE);
    }
  }
}

export default Validator;
