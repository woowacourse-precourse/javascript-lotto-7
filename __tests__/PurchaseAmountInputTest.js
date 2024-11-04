import { ERROR_MESSAGES } from "../src/config/constants.js";
import ValidatePurchaseAmount from "../src/utils/ValidatePurchaseAmount.js";

describe("구입 금액 검증 테스트", () => {
  test("입력 받은 금액이 양수이며 1000의 배수가 아닌 경우 오류를 발생시킨다", () => {
    const invalidAmounts = ["1001", "-1000", "0", "500"];
    invalidAmounts.forEach((amount) => {
      expect(() => {
        ValidatePurchaseAmount.validate(amount);
      }).toThrow(ERROR_MESSAGES.purchaseAmountInvalid);
    });
  });

  test("입력 받은 금액이 숫자가 아닌 경우 오류를 발생시킨다", () => {
    const invalidAmounts = ["1000j", "1000ㅋ", "1000!"];
    invalidAmounts.forEach((amount) => {
      expect(() => {
        ValidatePurchaseAmount.validate(amount);
      }).toThrow(ERROR_MESSAGES.purchaseAmountNotANumber);
    });
  });

  test("입력 받은 금액이 10만원을 초과할 때 오류를 발생시킨다", () => {
    const excessiveAmount = "1000000";
    expect(() => {
      ValidatePurchaseAmount.validate(excessiveAmount);
    }).toThrow(ERROR_MESSAGES.purchaseAmountExceedsLimit);
  });

  test("입력 받은 금액이 유효한 경우 통과된다", () => {
    const validAmounts = ["1000", "2000", "10000", "50000", "100000"];
    validAmounts.forEach((amount) => {
      expect(() => {
        ValidatePurchaseAmount.validate(amount);
      }).not.toThrow();
    });
  });
});
