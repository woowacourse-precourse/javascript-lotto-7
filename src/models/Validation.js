import { ERROR_MESSAGES, CustomError } from "../constants/Errors.js";

class Validation {
  static ispurchaseMoneyValidated(purchaseMoneyInput) {
    if (Number.isNaN(Number(purchaseMoneyInput))) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmountType);
    }

    if (Number(purchaseMoneyInput) % 1000) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmount);
    }

    if (purchaseMoneyInput === "" || Number(purchaseMoneyInput) <= 0) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmountZero);
    }
  }

  static validateLottoNumberLength(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberLength);
    }
  }

  static validateLottoNumberDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberDuplicate);
    }
  }

  static validateLottoNumberType(numbers) {
    if (numbers.some((number) => /\D/.test(number))) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberType);
    }
  }

  static validateLottoNumberRange(numbers) {
    if (numbers.some((number) => number > 45 || number < 1)) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberRange);
    }
  }

  static isBonusNumberValidated(bonusNumber) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new CustomError(ERROR_MESSAGES.invalidBonusNumberType);
    }

    if (bonusNumber > 45 || bonusNumber < 1) {
      throw new CustomError(ERROR_MESSAGES.invalidBonusNumberRange);
    }
  }
}

export default Validation;
