import BonusNumber from "../src/BonusNumber";

describe("보너스 번호 클래스 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("seven", winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위 내에 없는 경우(너무 큰 값) 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(50, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위 내에 없는 경우(너무 작은 값) 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(0, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(3, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 음수일 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(-5, winningNumbers);
    }).toThrow("[ERROR]");
  });
});
