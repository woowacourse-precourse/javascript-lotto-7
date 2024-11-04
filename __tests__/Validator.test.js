import Validator from "../src/utils/Validator.js";
import errorMessages from "../src/constants/errorMessages.js";
import { LOTTO_PRICE_UNIT } from "../src/constants/lottoConstants.js";

describe("Validator", () => {
  describe("validatePurchaseAmount", () => {
    test("유효한 금액", () => {
      expect(() => Validator.validatePurchaseAmount(2000)).not.toThrow();
    });

    test("유효하지 않은 금액 (1000으로 나누어 떨어지지 않음)", () => {
      expect(() => Validator.validatePurchaseAmount(1500)).toThrow(
        errorMessages.INVALID_AMOUNT
      );
    });

    test("유효하지 않은 금액 (NaN)", () => {
      expect(() => Validator.validatePurchaseAmount("abc")).toThrow(
        errorMessages.INVALID_AMOUNT
      );
    });
  });

  describe("validateNumsLength", () => {
    test("유효한 길이", () => {
      expect(() =>
        Validator.validateNumsLength([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("유효하지 않은 길이", () => {
      expect(() => Validator.validateNumsLength([1, 2, 3])).toThrow(
        errorMessages.INVALID_NUMBERS_LENGTH
      );
    });
  });

  describe("validateNumsInRange", () => {
    test("유효한 범위", () => {
      expect(() =>
        Validator.validateNumsInRange([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("유효하지 않은 범위", () => {
      expect(() => Validator.validateNumsInRange([0, 1, 2, 3, 4, 5])).toThrow(
        errorMessages.INVALID_NUMBERS_RANGE
      );
      expect(() =>
        Validator.validateNumsInRange([46, 47, 48, 49, 50, 51])
      ).toThrow(errorMessages.INVALID_NUMBERS_RANGE);
    });
  });

  describe("validateNumsDuplicate", () => {
    test("중복 없음", () => {
      expect(() =>
        Validator.validateNumsDuplicate([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("중복 존재", () => {
      expect(() => Validator.validateNumsDuplicate([1, 2, 2, 4, 5, 6])).toThrow(
        errorMessages.INVALID_DUPLICATE_NUMBER
      );
    });
  });
});
