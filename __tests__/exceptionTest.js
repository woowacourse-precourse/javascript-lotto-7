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
      exception.validateBonusNumber(66, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]보너스 번호가 공백이면 예외가 발생한다.", () => {
    expect(() => {
      exception.validateBonusNumber("", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      exception.validateBonusNumber("hi", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      exception.validateBonusNumber(2.3, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("[입력 테스트]보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      exception.validateBonusNumber(2, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
