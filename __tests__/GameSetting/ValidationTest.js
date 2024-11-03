import Validation from "../../src/GameSetting/Utils/Validation.js";

describe("Validation", () => {
  describe("inputNaturalNumber", () => {
    test("자연수가 아닌 값을 입력할 때 에러를 던진다", () => {
      expect(() => Validation.inputNaturalNumber(5.4)).toThrow("[ERROR]");
      expect(() => Validation.inputNaturalNumber(0)).toThrow("[ERROR]");
      expect(() => Validation.inputNaturalNumber("a")).toThrow("[ERROR]");
    });
  });

  describe("numbersLength", () => {
    test("로또 번호가 6개가 아닐 때 에러를 던진다", () => {
      expect(() => Validation.numbersLength([2, 3, 4, 5])).toThrow("[ERROR]");
    });

    test("로또 번호가 6개일 때 에러를 던지지 않는다", () => {
      expect(() => Validation.numbersLength([1, 2, 3, 4, 5, 6])).not.toThrow();
    });
  });

  describe("numberRange", () => {
    test("1~45 범위 외의 숫자일 때 에러를 던진다", () => {
      expect(() => Validation.numberRange(0)).toThrow(
        "[ERROR] 로또 번호는 1-45여야 합니다."
      );
      expect(() => Validation.numberRange(46)).toThrow(
        "[ERROR] 로또 번호는 1-45여야 합니다."
      );
    });

    test("1~45 범위 내의 숫자일 때 에러를 던지지 않는다", () => {
      expect(() => Validation.numberRange(1)).not.toThrow();
      expect(() => Validation.numberRange(45)).not.toThrow();
      expect(() => Validation.numberRange(23)).not.toThrow();
    });
  });

  describe("numbersDuplicate", () => {
    test("중복된 숫자가 있을 때 에러를 던진다", () => {
      expect(() => Validation.numbersDuplicate([1, 2, 3, 4, 5, 5])).toThrow(
        "[ERROR] 중복되는 숫자가 없어야 합니다."
      );
    });

    test("중복된 숫자가 없을 때 에러를 던지지 않는다", () => {
      expect(() =>
        Validation.numbersDuplicate([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });
  });
});
