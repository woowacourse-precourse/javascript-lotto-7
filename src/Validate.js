import { CONSTANT_LOTTO, EMPTY_STRING, ZERO } from "./util/const.js";
import ERROR_MESSAGES from "./util/messages/error-message.js";
import REGEX from "./util/regex.js";
import { isNotANumber, isOutOfRange } from "./util/util.js";

class Validate {
  validatePrice(price) {
    this.#PriceEmpty(price);
    this.#PriceType(price);
    this.#PriceRange(price);
    this.#PriceDivide(price);
  }

  validateLottoNumbers(lottoNumbers) {
    this.#LottoNumbersEmpty(lottoNumbers);
    this.#LottoNumbersLength(lottoNumbers);
    this.#LottoNumbersType(lottoNumbers);
    this.#LottoNumbersOutOfRange(lottoNumbers);
    this.#LottoNumbersDuplicate(lottoNumbers);
    this.#LottoNumbersDelimiterAtStartOrEnd(lottoNumbers);
    this.#LottoNumbersDelimiterTwice(lottoNumbers);
  }

  validateBonusNumber(bonusNumber, lottoNumbers) {
    this.#BonusNumberEmpty(bonusNumber);
    this.#BonusNumberType(bonusNumber);
    this.#BonusNumberOutOfRange(bonusNumber);
    this.#BonusNumberDuplicate(bonusNumber, lottoNumbers);
  }

  #PriceEmpty(price) {
    if (price === EMPTY_STRING) {
      throw new Error(ERROR_MESSAGES.PRICE.EMPTY);
    }
  }
  #PriceType(price) {
    if (isNotANumber(price)) {
      throw new Error(ERROR_MESSAGES.PRICE.NOT_NUMBER);
    }
  }
  #PriceRange(price) {
    if (price < CONSTANT_LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGES.PRICE.NOT_ENOUGH);
    }
  }
  #PriceDivide(price) {
    if (price % CONSTANT_LOTTO.PRICE !== ZERO) {
      throw new Error(ERROR_MESSAGES.PRICE.WRONG);
    }
  }

  #LottoNumbersEmpty(lottoNumbers) {
    if (lottoNumbers === EMPTY_STRING) {
      throw new Error(ERROR_MESSAGES.LOTTO.EMPTY);
    }
  }
  #LottoNumbersLength(lottoNumbers) {
    if (lottoNumbers.split(",").length !== CONSTANT_LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGES.LOTTO.WRONG_LENGTH);
    }
  }
  #LottoNumbersType(lottoNumbers) {
    if (lottoNumbers.split(",").some(isNotANumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO.WRONG_TYPE);
    }
  }
  #LottoNumbersOutOfRange(lottoNumbers) {
    if (lottoNumbers.split(",").some(isOutOfRange)) {
      throw new Error(ERROR_MESSAGES.LOTTO.WRONG_NUMBER);
    }
  }
  #LottoNumbersDuplicate(lottoNumbers) {
    if (new Set(lottoNumbers.split(",")).size !== CONSTANT_LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGES.LOTTO.DUPLICATED);
    }
  }
  #LottoNumbersDelimiterAtStartOrEnd(lottoNumbers) {
    if (REGEX.DELIMITER_START_OR_END.test(lottoNumbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO.DELIMITER.START_OR_END);
    }
  }
  #LottoNumbersDelimiterTwice(lottoNumbers) {
    if (REGEX.CONSECUTIVE_DELIMITERS.test(lottoNumbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO.DELIMITER.CONSECUTIVE);
    }
  }

  #BonusNumberEmpty(bonusNumber) {
    if (bonusNumber === EMPTY_STRING) {
      throw new Error(ERROR_MESSAGES.BONUS.EMPTY);
    }
  }
  #BonusNumberType(bonusNumber) {
    if (Number.isNaN(+bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS.NOT_NUMBER);
    }
  }
  #BonusNumberOutOfRange(bonusNumber) {
    if (isOutOfRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS.WRONG);
    }
  }
  #BonusNumberDuplicate(bonusNumber, lottoNumbers) {
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS.DUPLICATED);
    }
  }
}

export default Validate;
