import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  ERROR_MESSAGES,
} from "../config/constants.js";

export default class ValidateBonusNumber {
  static validate(winningNumbers, bonusNumber) {
    if (!/^\d+$/.test(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumberNotANumber);
    }

    const parsedBonusNumber = parseInt(bonusNumber, 10);

    if (
      parsedBonusNumber < LOTTO_NUMBER_MIN ||
      parsedBonusNumber > LOTTO_NUMBER_MAX
    ) {
      throw new Error(ERROR_MESSAGES.bonusNumberOutOfRange);
    }

    if (winningNumbers.includes(parsedBonusNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumberDuplicate);
    }
  }
}
