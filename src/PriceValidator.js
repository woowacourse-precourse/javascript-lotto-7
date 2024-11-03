import handleError from './utils/handleError.js';
import ERROR_MESSAGES from './constants/errorMessages.js';

class PriceValidator {
  static isEmptyPrice(inputPrice) {
    if (inputPrice.length === 0) {
      handleError(ERROR_MESSAGES.PURCHASE_PRICE_EMPTY);
    }
  }

  static isNotNumber(price) {
    if (!Number.isInteger(price)) {
      handleError(ERROR_MESSAGES.PURCHASE_PRICE_NOT_A_NUMBER);
    }
  }

  static isBelowMinimum(price) {
    if (price < 1000) {
      handleError(ERROR_MESSAGES.PURCHASE_PRICE_BELOW_MINIMUM);
    }
  }

  static isMultipleOfThousand(price) {
    if (price % 1000 !== 0) {
      handleError(ERROR_MESSAGES.PURCHASE_PRICE_NOT_MULTIPLE_OF_THOUSAND);
    }
  }

  static validatePrice(inputPrice) {
    this.isEmptyPrice(inputPrice);

    const price = Number(inputPrice);
    this.isNotNumber(price);
    this.isBelowMinimum(price);
    this.isMultipleOfThousand(price);

    return price;
  }
}

export default PriceValidator;
