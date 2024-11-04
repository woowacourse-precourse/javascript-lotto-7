import {
  ERROR_MESSAGE,
  LOTTO_ERROR,
  REQUEST_NUMBER_INPUT,
} from "../constants/error.js";
import { LOTTO_VALUES } from "../constants/message.js";
import Validate from "./Validate.js";

class LottoValidate extends Validate {
  validateLotto(lotto) {
    this.isEmpty(lotto);
    this.#checkArrayForNotNumber(lotto);
    this.#checkArrayForRange(lotto);
    this.#checkArrayForDuplicates(lotto);
    this.#checkArrayLength(lotto);
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
