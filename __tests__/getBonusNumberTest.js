import { validateBonusNumber } from "../src/validateBonusNumber";
import { validateWinningNumbers } from "../src/validateWinningNumbers";

describe("getBonusNumber 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  test("보너스 번호가 1개가 아니면 예외가 발생한다.", () => {
    expect(() => validateWinningNumbers("7,8", winningNumbers)).toThrow(
      "[ERROR]"
    );
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber("a", winningNumbers)).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber("0", winningNumbers)).toThrow("[ERROR]");
    expect(() => validateBonusNumber("46", winningNumbers)).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber("3", winningNumbers)).toThrow("[ERROR]");
  });

  test("올바른 보너스 번호를 반환한다.", () => {
    const bonusNumber = validateBonusNumber("7", winningNumbers);
    expect(bonusNumber).toBe(7);
  });
});
