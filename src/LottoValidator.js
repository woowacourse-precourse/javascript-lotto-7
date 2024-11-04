import { ERROR_MESSAGES, LOTTO_NUMBERS, LOTTO_PRICE } from "./constants.js";

class LottoValidator {
  static validateAmount(amount) {
    const parsedAmount = Number(amount);
    if (
      isNaN(parsedAmount) ||
      parsedAmount <= 0 ||
      parsedAmount % LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }

  static checkBonusNumberType(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE);
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.checkBonusNumberRange(bonusNumber);
    this.checkBonusNumberDuplication(bonusNumber, winningNumbers);
  }

  static checkBonusNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_NUMBERS.MIN || bonusNumber > LOTTO_NUMBERS.MAX) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  static checkBonusNumberDuplication(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default LottoValidator;
