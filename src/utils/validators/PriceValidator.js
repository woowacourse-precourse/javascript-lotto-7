import ERROR_MESSAGE from '../constants/errorMessage.js';

class PriceValidator {
  allRunPriceValidator(price) {
    this.isNotNumber(price);
    this.isUnitThousand(price);
    this.isBlank(price);

    return price;
  }

  isNotNumber(price) {
    if (isNaN(price)) {
      throw new Error(ERROR_MESSAGE.PRICE_ERROR);
    }
    return price;
  }

  isUnitThousand(price) {
    if (price % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PRICE_ERROR);
    }
    return price;
  }

  isBlank(price) {
    if (!price) {
      throw new Error(ERROR_MESSAGE.PRICE_ERROR);
    }
  }
}
export default PriceValidator;
