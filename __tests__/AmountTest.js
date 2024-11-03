import InputValidator from "../src/InputValidator";

describe("InputValidator 클래스 테스트", () => {
  let inputValidator;

  beforeEach(() => {
    inputValidator = new InputValidator();
  });

  test("구입 금액이 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateAmount("");
    }).toThrow("[ERROR] 구입 금액은 입력해야 합니다.");

    expect(() => {
      inputValidator.validateAmount(null);
    }).toThrow("[ERROR] 구입 금액은 입력해야 합니다.");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateAmount("a");
    }).toThrow("[ERROR] 구입 금액은 숫자여야 합니다.");
  });

  test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateAmount(1001);
    }).toThrow("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
  });

  test("구입 금액이 1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateAmount(1);
    }).toThrow("[ERROR] 구입 금액은 1,000원 이상이여야 합니다.");
  });

  test("유효한 구입 금액일 경우 정상적으로 처리된다.", () => {
    expect(inputValidator.validateAmount(1000)).toBe(true);
    expect(inputValidator.validateAmount(2000)).toBe(true);
    expect(inputValidator.validateAmount(5000)).toBe(true);
  });
});
