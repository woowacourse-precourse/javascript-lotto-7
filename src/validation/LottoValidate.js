import { ERROR_MESSAGE, LOTTO_ERROR } from "../constants/error";
import { DELIMITER_REGEX } from "../utils/regex";

class LottoValidate extends Validate {
  validateLotto(lotto) {
    this.isEmpty(lotto);
    this.isZero(lotto);
    this.isNumber(lotto);
    this.isWithinRange(lotto);
    this.#delimiter(lotto);
  }
  #delimiter(lotto) {
    if (!DELIMITER_REGEX.test(lotto)) {
      throw new Error(ERROR_MESSAGE + LOTTO_ERROR.INVALID_DELIMITER);
    }
  }
}

export default LottoValidate;
