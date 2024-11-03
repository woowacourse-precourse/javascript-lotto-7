import LOTTO from "../src/constants/lotto";
import { ERROR_MESSAGES } from "../src/constants/messages";
import Validator from "../src/validator/Validator";

describe("Validator", () => {
  describe("isEmpty", () => {
    test("빈 입력에 대해 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isEmpty("")).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.EMPTY_INPUT}`
      );
    });

    test("빈 입력이 아닐 경우 입력 값을 반환해야 한다", () => {
      expect(Validator.isEmpty("test")).toBe("test");
    });
  });

  describe("isSeparatedFormat", () => {
    test("입력이 구분자를 포함하지 않으면 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isSeparatedFormat("1")).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.INVALID_SEPARATOR}`
      );
    });

    test("유효한 입력에 대해 공백을 제거한 값을 배열로 반환해야 한다", () => {
      expect(Validator.isSeparatedFormat("1, 2, 3")).toEqual(["1", "2", "3"]);
    });
  });

  describe("isNumber", () => {
    test("숫자가 아닌 입력에 대해 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isNumber("test")).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.NON_NUMERIC}`
      );
    });

    test("유효한 숫자 입력에 대해 숫자를 반환해야 한다", () => {
      expect(Validator.isNumber("123")).toBe(123);
    });
  });

  describe("isNagativeNumber", () => {
    test("음수 입력에 대해 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isNagativeNumber(-1)).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.NEGATIVE_VALUE}`
      );
    });

    test("음수가 아닌 입력에 대해 입력 값을 반환해야 한다", () => {
      expect(Validator.isNagativeNumber(0)).toBe(0);
      expect(Validator.isNagativeNumber(5)).toBe(5);
    });
  });

  describe("isZero", () => {
    test("0 입력에 대해 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isZero(0)).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.ZERO_VALUE}`
      );
    });

    test("0이 아닌 입력에 대해 입력 값을 반환해야 한다", () => {
      expect(Validator.isZero(1)).toBe(1);
      expect(Validator.isZero(-1)).toBe(-1);
    });
  });

  describe("isNumberInRange", () => {
    test("범위를 벗어난 입력에 대해 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isNumberInRange(LOTTO.MIN_NUMBER - 1)).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.OUT_OF_RANGE}`
      );
      expect(() => Validator.isNumberInRange(LOTTO.MAX_NUMBER + 1)).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.OUT_OF_RANGE}`
      );
    });

    test("유효한 범위의 입력에 대해 입력 값을 반환해야 한다", () => {
      expect(Validator.isNumberInRange(LOTTO.MIN_NUMBER)).toBe(
        LOTTO.MIN_NUMBER
      );
      expect(Validator.isNumberInRange(LOTTO.MAX_NUMBER)).toBe(
        LOTTO.MAX_NUMBER
      );
    });
  });

  describe("isLengthSix", () => {
    test("길이가 올바르지 않은 경우 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isLengthSix([1, 2, 3, 4, 5])).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.INCORRECT_LENGTH}`
      );
    });

    test("길이가 올바른 경우 입력 값을 반환해야 한다", () => {
      expect(Validator.isLengthSix([1, 2, 3, 4, 5, 6])).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });
  });

  describe("isDuplicate", () => {
    test("중복된 값에 대해 오류를 발생시켜야 한다", () => {
      expect(() => Validator.isDuplicate(["1", "2", "1"])).toThrow(
        `${ERROR_MESSAGES.HEADER}${ERROR_MESSAGES.DUPLICATE_FOUND}`
      );
    });

    test("유일한 값의 입력에 대해 입력 값을 반환해야 한다", () => {
      expect(Validator.isDuplicate(["1", "2", "3"])).toEqual(["1", "2", "3"]);
    });
  });
});
