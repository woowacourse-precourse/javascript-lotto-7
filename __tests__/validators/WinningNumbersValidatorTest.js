import WinningNumbersValidator from "../../src/validators/WinningNumbersValidator";

describe("WinningNumbersValidator 클래스 테스트", () => {
  describe("배열 형식 테스트", () => {
    test.each([
      { input: "123456", description: "문자열" },
      { input: 123456, description: "숫자" },
      { input: { numbers: [1] }, description: "객체" },
      { input: null, description: "null" },
      { input: undefined, description: "undefined" },
    ])("$description이 입력되면 예외가 발생한다", ({ input }) => {
      expect(() => WinningNumbersValidator.checkValid(input)).toThrow("[ERROR]");
    });
  });

  describe("로또 번호 개수 테스트", () => {
    test.each([
      { input: [1, 2, 3, 4, 5], description: "5개 숫자" },
      { input: [1, 2, 3, 4, 5, 6, 7], description: "7개 숫자" },
      { input: [], description: "빈 배열" },
    ])("$description가 입력되면 예외가 발생한다", ({ input }) => {
      expect(() => WinningNumbersValidator.checkValid(input)).toThrow("[ERROR]");
    });
  });

  describe("숫자 타입 테스트", () => {
    test.each([{ input: [1, 2, 3, "a", 5, 6], description: "문자열 숫자 포함" }])(
      "$description된 배열이 입력되면 예외가 발생한다",
      ({ input }) => {
        expect(() => WinningNumbersValidator.checkValid(input)).toThrow("[ERROR]");
      }
    );
  });

  describe("중복 숫자 테스트", () => {
    test.each([[[1, 2, 3, 3, 4, 5]], [[1, 2, 3, 4, 4, 5]], [[1, 2, 2, 3, 4, 5]]])(
      "중복된 배열이 입력되면 예외가 발생한다",
      (input) => {
        expect(() => WinningNumbersValidator.checkValid(input)).toThrow("[ERROR]");
      }
    );
  });

  describe("숫자 범위 테스트", () => {
    test.each([
      { input: [0, 1, 2, 3, 4, 5], description: "1보다 작은 숫자" },
      { input: [1, 2, 3, 4, 5, 46], description: "45보다 큰 숫자" },
    ])("$description가 포함된 배열이 입력되면 예외가 발생한다", ({ input }) => {
      expect(() => WinningNumbersValidator.checkValid(input)).toThrow("[ERROR]");
    });
  });
});
