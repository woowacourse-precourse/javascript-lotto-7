import { LOTTO } from '../constant/Constants.js';
import { LOTTO_ERROR } from '../constant/Constants.js';

export default class LottoNumberValidator {
  static rangeCheck(numberList) {
    numberList.forEach((number) => {
      if (number < LOTTO.MINIMUM_NUMBER || LOTTO.MAXIMUM_NUMBER < number) {
        throw new Error(LOTTO_ERROR.INVALID_NUMBER_RANGE);
      }
    });
  }

  static countCheck(numberList, requiredCount) {
    if (numberList.length !== requiredCount) {
      throw new Error(LOTTO_ERROR.INVALID_LOTTO_ISSUANCE);
    }
  }

  static duplicationCheck(numberList) {
    const setNumber = new Set(numberList);

    if (numberList.length !== setNumber.size) {
      throw new Error(LOTTO_ERROR.INVALID_LOTTO_ISSUANCE);
    }
  }
}
