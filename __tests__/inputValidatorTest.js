import inputValidator from "../src/inputValidator";

describe("구입금액 입력 유효성 테스트", () => {
  test("빈 이름 입력 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount(null)).toThrow(
      "[ERROR] 입력이 비어 있습니다."
    );
    expect(() => inputValidator.checkPurchaseAmount("  ")).toThrow(
      "[ERROR] 입력이 비어 있습니다."
    );
  });

  test("숫자가 아닌 문자 입력 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount("hellowon")).toThrow(
      "[ERROR] 입력에 숫자가 아닌 문자가 포함되어 있습니다."
    );
    expect(() => inputValidator.checkPurchaseAmount("5000won")).toThrow(
      "[ERROR] 입력에 숫자가 아닌 문자가 포함되어 있습니다."
    );
  });

  test("1000원 단위 입력이 아닐 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount("11110")).toThrow(
      "[ERROR] 입력이 1000원 단위가 아닙니다."
    );
  });

  test("유효한 숫자인 경우", () => {
    expect(inputValidator.checkPurchaseAmount("5000")).toBe(5000);
    expect(inputValidator.checkPurchaseAmount("11000")).toBe(11000);
  });
});
