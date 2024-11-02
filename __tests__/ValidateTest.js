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

  test("값이 1~45사이의 숫자가 아닌 경우", () => {
    expect(() => validator.lottoNumberRange([1, 2, 3, 4, 5, 46])).toThrow("[ERROR]");
  });

  test("중복된 값이 존재할 경우", () => {
    expect(() => validator.duplicateLottoNumber([1, 2, 2, 3, 4, 5])).toThrow("[ERROR]");
  });

  test("당첨 번호 개수가 6개가 아닌 경우", () => {
    expect(() => validator.lottoNumberLength([1, 2, 3, 4, 5, 6, 7])).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45사이의 수가 아닌 경우", () => {
    expect(() => validator.bonusNumberRange(100)).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨번호와 중복되는 경우", () => {
    expect(() => validator.duplicateBonusNumber(1, [1, 2, 3, 4, 5, 6])).toThrow("[ERROR]");
  });
});