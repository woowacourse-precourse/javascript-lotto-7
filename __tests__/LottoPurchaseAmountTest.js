import { LOTTO_PURCHASE_AMOUNT } from "../src/constants/validationMessages/lottoPurchaseAmount.js";
import { validatePurchaseAmountPipe } from "../src/validation/validatePurchaseAmount/validatePurchaseAmountPipe.js";

describe("로또 구입 금액 테스트", () => {
  test.each([
    ["", LOTTO_PURCHASE_AMOUNT.NOT_EMPTY],
    ["lotto", LOTTO_PURCHASE_AMOUNT.NOT_A_NUMBER],
    ["900", LOTTO_PURCHASE_AMOUNT.MIN_LOTTO_PURCHASE_AMOUNT],
    ["1200", LOTTO_PURCHASE_AMOUNT.NOT_DIVISIBLE_BY_MINIMUM_AMOUNT],
  ])("validatePurchaseAmountPipe(%s) throw %s", (input, expected) => {
    expect(() => validatePurchaseAmountPipe(input)).toThrow(expected);
  });
});
