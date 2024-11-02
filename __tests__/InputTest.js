import Input from "../src/Input.js";

describe("입력 클래스 테스트", () => {
  test("로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      Input.validateMoney("abc");
    }).toThrow("[ERROR] ");
  });

  test("로또 구입 금액이 음수일 경우 예외가 발생한다.", () => {
    expect(() => {
      Input.validateMoney("-1000");
    }).toThrow("[ERROR] ");
  });

  test("로또 구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Input.validateMoney("11100");
    }).toThrow("[ERROR] ");
  });

  test("올바른 로또 구입 금액이 입력되면 예외가 발생하지 않는다.", () => {
    expect(() => {
      Input.validateMoney("5000");
    }).not.toThrow();
  });
});