import ValidateNumber from "../src/validate/ValidateNumber.js";

describe("보너스 번호 테스트", () => {
  test.each([["99b"], ["ABC"], ["1등"]])("숫자 이외의 값을 입력한 경우", async (input) => {
    expect(() => {
      ValidateNumber.validateNonNumber(input);
    }).toThrow("[ERROR]");
  });

  test.each([["3", [1, 2, 3, 4, 5, 6]]])("보너스 번호와 로또 번호와 일치할 경우", async (input_number, input_lotto) => {
    expect(() => {
      ValidateNumber.validateBonusDup(input_number, input_lotto);
    }).toThrow("[ERROR]");
  });

  test.each([["-2"], ["0"], ["46"]])("보너스 번호가 1~45 사이가 아닌 경우", async (input) => {
    expect(() => {
      ValidateNumber.validateBonusRange(input);
    }).toThrow("[ERROR]");
  });
});
