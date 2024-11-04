import {
  isLessThan,
  isGreaterThanEqualTo,
  isEqualTo
} from '../../util/ValidateUtil.js';
import CommonValidator from './CommonValidator.js';
import { ERROR_MESSAGE } from '../constants/Message.js';

class LottoRuleValidator extends CommonValidator {

  validate(lottoRule) {
    this.#validateLottoAmountRule(lottoRule.lottoAmount, lottoRule.maxlottoPurchaseAmount);
    const { startNumber, endNumber } = lottoRule.lottoNumberRange;
    this.#validateLottoNumberRule(lottoRule.lottoNumberCount, startNumber, endNumber);
  }

  #validateLottoAmountRule(amount, maxAmount) {
    super.checkValidInputValues([amount, maxAmount]);

    this.#validateAmountLessThanMaxAmount(amount, maxAmount);
  }

  #validateLottoNumberRule(count, startNumber, endNumber) {
    super.checkValidInputValues([count, startNumber, endNumber]);

    this.#checkValidNumberRange(startNumber, endNumber);
    this.#validateNumberCountInRangeNumberCount(count, startNumber, endNumber);
  }

  #validateAmountLessThanMaxAmount = (amount, maxAmount) => {
    if (!isLessThan(amount, maxAmount)) {
      throw new Error(ERROR_MESSAGE.ERROR_CONFIG_MAX_PURCHASE_AMOUNT_EXEEDED(amount, maxAmount))
    }
  }

  #checkValidNumberRange = (minNumber, maxNumber) => {
    if (!isLessThan(minNumber, maxNumber) || isEqualTo(minNumber, maxNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_CONFIG_INVALID_LOTTO_NUMBER_RANGE(minNumber, maxNumber));
    }
  }

  #validateNumberCountInRangeNumberCount = (count, startNumber, endNumber) => {
    const validLottoNumberCount = endNumber - startNumber + 1;

    if (!isGreaterThanEqualTo(validLottoNumberCount, count)) {
      throw new Error(ERROR_MESSAGE.ERROR_CONFIG_COUNT_GREATER_THAN_ALL_LOTTO_NUMBERS(count, validLottoNumberCount));
    }
  }
}

export default LottoRuleValidator;