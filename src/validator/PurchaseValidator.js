import { GAME_CONSTANTS } from "../utils/GameConstants.js";
import { ERROR_MESSAGES } from "../utils/ErrorMessageConstants.js";

export class PurchaseValidator {
  // 구매 금액 검증
  static validatePurchaseAmount(amount) {
    this.validateNumberFormat(amount);
    this.validatePositiveNumber(amount);
    this.validateUnit(amount);
  }

  // 로또 번호가 숫자인지 검증
  static validateNumberFormat(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    }
  }

  // 양수인지 검증
  static validatePositiveNumber(value) {
    if (value <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_POSITIVE_NUMBER);
    }
  }

  // 로또는 1000원 단위로만 구매 가능
  static validateUnit(amount) {
    if (amount % GAME_CONSTANTS.PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
  }
}
