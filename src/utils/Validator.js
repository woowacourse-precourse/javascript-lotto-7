import errorMessages from "../constants/errorMessages.js";
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_RANGE,
  LOTTO_PRICE_UNIT,
} from "../constants/lottoConstants.js";

class Validator {
  static validateNumsLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(errorMessages.INVALID_NUMBERS_LENGTH);
    }
  }

  static validateNumsInRange(numbers) {
    numbers.map((num) => {
      if (LOTTO_NUMBER_RANGE.MIN > num || num > LOTTO_NUMBER_RANGE.MAX)
        throw new Error(errorMessages.INVALID_NUMBERS_RANGE);
    });
  }

  static validateNumsDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO_NUMBER_COUNT)
      throw new Error(errorMessages.INVALID_DUPLICATE_NUMBER);
  }

  static validatePurchaseAmount(purchaseAmount) {
    const amount = Number(purchaseAmount);
    if (isNaN(amount) || amount % LOTTO_PRICE_UNIT !== 0) {
      throw new Error(errorMessages.INVALID_AMOUNT);
    }
  }
}

export default Validator;
