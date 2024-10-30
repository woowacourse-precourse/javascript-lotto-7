import InputValidate from "../src/utils/InputValidate"

describe("유효성 검사 테스트", () => {
  let validator = new InputValidate();

  test("금액을 입력하지 않았을 경우", () => {
    expect(() => validator.inputExist('')).toThrow("[ERROR]");
  });

  test("금액이 숫자가 아닌 경우", () => {
    expect(() => validator.inputType("a")).toThrow("[ERROR]");
  });

  test("금액이 1000단위로 나누어 떨어지는 경우가 아닐때", () => {
    expect(() => validator.inputUnit("1100").toThrow("[ERROR]"));
  });

  test("금액이 음수인 경우", () => {
    expect(() => validator.inputRange("-1000")).toThrow("[ERROR]");
  });
});