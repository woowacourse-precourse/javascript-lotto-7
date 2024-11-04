import {
  ERROR_MESSAGE,
  LOTTO_ERROR,
  MINIMUM_VALUE,
  REQUEST_NUMBER_INPUT,
  ZERO,
} from "../constants/error.js";
import { LOTTO_VALUES } from "../constants/lotto.js";
import Validate from "./Validate.js";

class LottoValidate extends Validate {
  validateLotto(lotto) {
    this.#checkArrayForZero(lotto);
    this.#checkArrayForNotNumber(lotto);
    this.#checkArrayForRange(lotto);
    this.#checkArrayForDuplicates(lotto);
    this.#checkArrayLength(lotto);
  }

  #checkArrayForZero(lotto) {
    if (lotto.some((num) => num === ZERO)) {
      throw new Error(ERROR_MESSAGE + MINIMUM_VALUE);
    }
  }

  #checkArrayForNotNumber(lotto) {
    if (lotto.some((num) => isNaN(num))) {
      throw new Error(ERROR_MESSAGE + REQUEST_NUMBER_INPUT);
    }
  }

  #checkArrayForRange(lotto) {
    if (lotto.some((num) => Number(num) > LOTTO_VALUES.MAX)) {
      throw new Error(ERROR_MESSAGE + LOTTO_ERROR.RANGE);
    }
  }

  #checkArrayForDuplicates(lotto) {
    const uniqueNumbers = new Set(lotto);
    if (uniqueNumbers.size !== lotto.length) {
      throw new Error(ERROR_MESSAGE + LOTTO_ERROR.DUPLICATE);
    }
  }
  #checkArrayLength(lotto) {
    if (lotto.length > LOTTO_VALUES.COUNT) {
      throw new Error(ERROR_MESSAGE + LOTTO_ERROR.LENGTH);
    }
  }
}

export default LottoValidate;
