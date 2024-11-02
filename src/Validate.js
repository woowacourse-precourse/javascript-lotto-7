import { CONSTANT_LOTTO, EMPTY_STRING, NUMBERS } from "./util/const.js";
import ERROR_MESSAGES from "./util/messages/error-message.js";
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
    if (price % CONSTANT_LOTTO.PRICE !== NUMBERS.ZERO) {
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
    const lottoNumbersArray = lottoNumbers.split(",");
    if (lottoNumbersArray.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS.DUPLICATED);
    }
  }
}

export default Validate;
