// Lotto.test.js
import Lotto from "../src/models/Lotto.js";
import Validator from "../src/utils/Validator.js";
import errorMessages from "../src/constants/errorMessages.js";

describe("Lotto", () => {
  test("valid Lotto creation", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("invalid Lotto creation due to length", () => {
    expect(() => new Lotto([1, 2, 3])).toThrow(
      errorMessages.INVALID_NUMBERS_LENGTH
    );
  });

  test("invalid Lotto creation due to range", () => {
    expect(() => new Lotto([0, 1, 2, 3, 4, 5])).toThrow(
      errorMessages.INVALID_NUMBERS_RANGE
    );
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(
      errorMessages.INVALID_NUMBERS_RANGE
    );
  });

  test("invalid Lotto creation due to duplicates", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      errorMessages.INVALID_DUPLICATE_NUMBER
    );
  });
});
