import NumberValidate from "../src/validate/NumberValidate.js";

describe("사용자 금액 테스트", () => {
  test.each([["1000a"], ["AAAAA"], ["로또당첨"], ["-1"], [""]])("숫자 이외의 값을 입력한 경우", async (input) => {
    expect(() => {
      NumberValidate.validateNonNumber(input);
    }).toThrow("[ERROR]");
  });

  test.each([["0"], ["999"]])("1000보다 작은 값을 입력한 경우", async (input) => {
    expect(() => {
      NumberValidate.validateSmallNumber(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1000000001"], ["99999999999"]])("너무 큰 값을 입력한 경우", async (input) => {
    expect(() => {
      NumberValidate.validateBigNumber(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1001"], ["4444"], ["8999"]])("1000으로 나누어 떨어지지 않는 경우", async (input) => {
    expect(() => {
      NumberValidate.validateDivideThousand(input);
    }).toThrow("[ERROR]");
  });
});
