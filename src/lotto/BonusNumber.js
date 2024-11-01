import CustomError from "../CustomError.js";
import { LOTTO_MESSAGES, LOTTO_RULES } from "../constants/index.js";
import { isNotPositiveInteger, isInRange } from "../utils/validation.js";

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber, winningNumbers);
  }

  #validate(bonusNumber, winningNumbers) {
    if (isNotPositiveInteger(bonusNumber)) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_NON_POSITIVE_INTEGER);
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new CustomError(LOTTO_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }

    const { MIN_RANGE, MAX_RANGE } = LOTTO_RULES;
    if (!isInRange(MIN_RANGE, MAX_RANGE, bonusNumber)) {
      throw new CustomError(LOTTO_MESSAGES.INVALID_RANGE_NUMBER);
    }
  }
}

export default BonusNumber;
