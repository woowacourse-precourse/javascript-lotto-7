import { PURCHASE_ERRORS } from '../constants/constants.js';

class PurchaseAmountValidator {
  static validateDivisibleBy1000(value) {
    if (value % 1000 !== 0) {
      throw new Error(PURCHASE_ERRORS.NOT_DIVIDED_1000);
    }
  }
}

export default PurchaseAmountValidator;
