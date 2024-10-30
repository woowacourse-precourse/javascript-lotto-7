import { LOTTO } from "../constants/Constants.js";
import { ERROR_MESSAGE } from "../constants/Constants.js";

export class Validator {
  static purchaseAmountunit(number) {
    if (number % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.get("PURCHASE_AMOUNT_UNIT"));
    }
  }

  static minPurchase(number) {
    if (number < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.get("MIN_PURCHASE"));
    }
  }
  static totalNumber(numbers) {
    if (numbers.length !== LOTTO.TOTAL_NUMBERS) {
      throw new Error(ERROR_MESSAGE.get("TOTAL_NUMBER"));
    }
  }

  static numberArrange(numbers) {
    numbers.forEach((number) => {
      if (!(number <= LOTTO.ARRANGE_END) || !(number >= LOTTO.ARRANGE_START)) {
        throw new Error(ERROR_MESSAGE.get("NUMBER_ARRANGE"));
      }
    });
  }

  static isInteger(numbers) {
    numbers.forEach((number) => {
      if (typeof number !== "number" || Math.floor(number) !== number) {
        throw new Error(ERROR_MESSAGE.get("INTEGER"));
      }
    });
  }

  static sameNumber(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.get("SAME"));
    }
  }
}
