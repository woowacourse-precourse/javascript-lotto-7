import Validator from "../src/utils/Validator.js";
import errorMessages from "../src/constants/errorMessages.js";
import { LOTTO_PRICE_UNIT } from "../src/constants/lottoConstants.js";

describe("Validator", () => {
  describe("validatePurchaseAmount", () => {
    test("valid amount", () => {
      expect(() => Validator.validatePurchaseAmount(2000)).not.toThrow();
    });

    test("invalid amount not divisible by 1000", () => {
      expect(() => Validator.validatePurchaseAmount(1500)).toThrow(
        errorMessages.INVALID_AMOUNT
      );
    });

    test("invalid amount is NaN", () => {
      expect(() => Validator.validatePurchaseAmount("abc")).toThrow(
        errorMessages.INVALID_AMOUNT
      );
    });
  });

  describe("validateNumsLength", () => {
    test("valid length", () => {
      expect(() =>
        Validator.validateNumsLength([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("invalid length", () => {
      expect(() => Validator.validateNumsLength([1, 2, 3])).toThrow(
        errorMessages.INVALID_NUMBERS_LENGTH
      );
    });
  });

  describe("validateNumsInRange", () => {
    test("valid range", () => {
      expect(() =>
        Validator.validateNumsInRange([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("invalid range", () => {
      expect(() => Validator.validateNumsInRange([0, 1, 2, 3, 4, 5])).toThrow(
        errorMessages.INVALID_NUMBERS_RANGE
      );
      expect(() =>
        Validator.validateNumsInRange([46, 47, 48, 49, 50, 51])
      ).toThrow(errorMessages.INVALID_NUMBERS_RANGE);
    });
  });

  describe("validateNumsDuplicate", () => {
    test("no duplicates", () => {
      expect(() =>
        Validator.validateNumsDuplicate([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("duplicates exist", () => {
      expect(() => Validator.validateNumsDuplicate([1, 2, 2, 4, 5, 6])).toThrow(
        errorMessages.INVALID_DUPLICATE_NUMBER
      );
    });
  });
});
