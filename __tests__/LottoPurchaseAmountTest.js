import { VALIDATION_MESSAGES } from "../src/constants/constants.js";
import { validatePurchaseAmountPipe } from "../src/validation/validatePurchaseAmount/validatePurchaseAmountPipe.js";

describe("로또 구입 금액 테스트", () => {
  test.each([
    ["lotto", VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.NOT_A_NUMBER],
    [
      "900",
      VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.MIN_LOTTO_PURCHASE_AMOUNT,
    ],
    [
      "1200",
      VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.NOT_DIVISIBLE_BY_MINIMUM_AMOUNT,
    ],
    ["", VALIDATION_MESSAGES.LOTTO_PURCHASE_AMOUNT.NOT_EMPTY],
  ])("validatePurchaseAmountPipe(%s) throw %s", (input, expected) => {
    expect(() => validatePurchaseAmountPipe(input)).toThrow(expected);
  });
});
