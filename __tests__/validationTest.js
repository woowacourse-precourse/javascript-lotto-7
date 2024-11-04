import LottoValidator from "../src/LottoValidator";

describe("LottoValidator 테스트", () => {
  test("콤마가 아닌 구분자를 사용하면 에러를 발생한다.", () => {
    const input = "1,3,5.7,9,6";
    const inputs = input.split(",");
    const validator = new LottoValidator();

    expect(() => validator.checkCount(inputs.length)).toThrow("[ERROR]");
  });

  test("콤마가 아닌 구분자를 사용하면 에러를 발생한다.", () => {
    const input = "1,3,5.7,9,6";
    const inputs = input.split(",");
    const validator = new LottoValidator();

    expect(() => validator.checkCount(inputs.length)).toThrow("[ERROR]");
  });
});
