import Validator from "../../src/validators/Validator";

describe("Validator 클래스 테스트", () => {
  describe("isNotNumber 메서드 테스트", () => {
    test.each([
      { input: "string", description: "문자열" },
      { input: NaN, description: "NaN" },
      { input: undefined, description: "undefined" },
      { input: null, description: "null" },
      { input: "", description: "빈 문자열" },
      { input: {}, description: "객체" },
      { input: [], description: "빈 배열" },
    ])("$description이 주어지면 true를 반환한다", ({ input }) => {
      expect(Validator.isNotNumber(input)).toBe(true);
    });

    test.each([
      { input: 123, description: "정수" },
      { input: 0, description: "0" },
      { input: -1, description: "음수" },
      { input: 1.23, description: "소수" },
      { input: "123", description: "숫자 문자열" },
    ])("$description이 주어지면 false를 반환한다", ({ input }) => {
      expect(Validator.isNotNumber(input)).toBe(false);
    });
  });

  describe("containNotNumber 메서드 테스트", () => {
    test.each([
      {
        input: [1, 2, "abc", 4],
        description: "문자열이 포함된 배열",
      },
      {
        input: [1, 2, NaN, 4],
        description: "NaN이 포함된 배열",
      },
      {
        input: { a: 1, b: 2, c: undefined, d: 4 },
        description: "undefined가 포함된 객체",
      },
      {
        input: { a: 1, b: 2, c: null, d: 4 },
        description: "null이 포함된 객체",
      },
    ])("$description이/가 주어지면 true를 반환", ({ input }) => {
      expect(Validator.containNotNumber(input)).toBe(true);
    });

    test.each([
      {
        input: [1, 2, 3, 4],
        description: "숫자로만 이루어진 배열",
      },
      {
        input: [-1, 0, 1],
        description: "음수와 0이 포함된 배열",
      },
      {
        input: [1.1, 2.2, 3.3],
        description: "소수로 이루어진 배열",
      },
    ])("$description이 주어지면 false를 반환", ({ input }) => {
      expect(Validator.containNotNumber(input)).toBe(false);
    });
  });
});
