import {
  validateWinningNumbers,
  validateBonusNumber,
} from "../src/utils/validation.js";

describe("Validation Tests", () => {
  test("당첨 번호가 6개가 아니면 예외 발생", () => {
    const invalidNumbers = [1, 2, 3, 4, 5];
    expect(() => validateWinningNumbers(invalidNumbers)).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외 발생", () => {
    const duplicateNumbers = [1, 2, 3, 4, 5, 5];
    expect(() => validateWinningNumbers(duplicateNumbers)).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45 범위 밖이면 예외 발생", () => {
    const outOfRangeNumbers = [1, 2, 3, 4, 5, 46];
    expect(() => validateWinningNumbers(outOfRangeNumbers)).toThrow("[ERROR]");
  });

  test("보너스 번호가 중복되거나 1~45 범위 밖이면 예외 발생", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const duplicateBonus = [5];
    const outOfRangeBonus = [46];

    expect(() => validateBonusNumber(duplicateBonus, winningNumbers)).toThrow(
      "[ERROR]"
    );
    expect(() => validateBonusNumber(outOfRangeBonus, winningNumbers)).toThrow(
      "[ERROR]"
    );
  });
});
