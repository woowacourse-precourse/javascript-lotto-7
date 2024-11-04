import { validatePurchasingAmount } from "../src/validation";
import ERROR_MESSAGE from "../src/constants/error";
describe("Purchasing Amount Validation", () => {
  test.each([
    {
      description: "유효한 금액 (1000원 단위)",
      input: 8000,
      shouldThrow: false,
    },
    {
      description: "유효하지 않은 금액 (1030원)",
      input: 1030,
      shouldThrow: true,
      expectedError: ERROR_MESSAGE.INPUT_AMOUNT,
    },
    {
      description: "유효하지 않은 금액 (음수)",
      input: -2000,
      shouldThrow: true,
      expectedError: ERROR_MESSAGE.INPUT_AMOUNT,
    },
    {
      description: "유효하지 않은 금액 (문자열)",
      input: "abc",
      shouldThrow: true,
      expectedError: ERROR_MESSAGE.INPUT_AMOUNT,
    },
  ])("$description", ({ input, shouldThrow, expectedError }) => {
    if (shouldThrow) {
      expect(() => validatePurchasingAmount(input)).toThrow(expectedError);
    } else {
      expect(() => validatePurchasingAmount(input)).not.toThrow();
    }
  });
});
