import ERRORS from '../constants/Errors.js';

class Validator {
  static validatePurchaseAmount(amount) {
    if (amount === '') throw new Error(ERRORS.PURCHASE_AMOUNT_EMPTY);
    if (isNaN(amount)) throw new Error(ERRORS.PURCHASE_AMOUNT_NOT_NUMBER);
    if (Number(amount) <= 0) throw new Error(ERRORS.PURCHASE_AMOUNT_NEGATIVE);
    if (Number(amount) % 1000 !== 0)
      throw new Error(ERRORS.PURCHASE_AMOUNT_INVALID_UNIT);
  }
}

export default Validator;
