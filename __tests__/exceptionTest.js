import Exception from "../src/exceptionHandling";

const exception = new Exception();

describe("로또 게임에 대한 테스트", () => {
  test("[입력 테스트]구입 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      exception.validatePrice(1234, false);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]구입 금액을 공백으로 작성하면 예외가 발생한다.", () => {
    expect(() => {
      exception.validatePrice("", false);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]구입 금액을 음수로 작성하면 예외가 발생한다.", () => {
    expect(() => {
      exception.validatePrice(-1000, false);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]보너스 번호가 1부터 45까지의 수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      exception.validateBonusNumber(66, false);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]보너스 번호가 공백이면 예외가 발생한다.", () => {
    expect(() => {
      exception.validateBonusNumber("", false);
    }).toThrow("[ERROR]");
  });
});
