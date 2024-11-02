import { LottoNumberValidator } from "./LottoNumberValidator";
import { PurchaseValidator } from "./PurchaseValidator";
import { ERROR_MESSAGES } from "../utils/ErrorMessageConstants";

export class BonusNumberValidator {
  static validateBonusNumber(bonusNumber, winNumbers) {
    PurchaseValidator.validateNumberFormat(bonusNumber);
    PurchaseValidator.validatePositiveNumber(bonusNumber);
    LottoNumberValidator.validateRange([bonusNumber]);

    if (winNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
  }
}
