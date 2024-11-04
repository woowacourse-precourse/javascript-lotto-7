import { PurchaseValidator } from "../src/utils/validator/PurchaseValidator.js";
import { ERROR_MESSAGES } from "../src/utils/constants/ErrorMessageConstants.js";

describe("구매 금액 검증 테스트", () => {
  test("구매 금액이 숫자가 아닐 경우 에러 반환", () => {
    expect(() => {
      PurchaseValidator.validateNumberFormat("1000");
    }).toThrow(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);

    expect(() => {
      PurchaseValidator.validateNumberFormat(null);
    }).toThrow(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
  });

  test("구매 금액이 양수가 아닐 경우 에러 반환", () => {
    expect(() => {
      PurchaseValidator.validatePositiveNumber(0);
    }).toThrow(ERROR_MESSAGES.INVALID_POSITIVE_NUMBER);

    expect(() => {
      PurchaseValidator.validatePositiveNumber(-1000);
    }).toThrow(ERROR_MESSAGES.INVALID_POSITIVE_NUMBER);
  });

  test("구매 금액이 1000원 단위가 아닐 경우 에러 반환", () => {
    expect(() => {
      PurchaseValidator.validateUnit(1500);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      PurchaseValidator.validateUnit(2001);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });
});
