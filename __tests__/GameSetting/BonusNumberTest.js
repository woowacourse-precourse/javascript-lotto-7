import BonusNumber from "../../src/GameSetting/BonusNumber";

describe("BonusNumber", () => {
  test.each([
    ["3", 3],
    ["45", 45],
  ])("올바른 입력값을 전달할 때 숫자를 반환한다", (input, expected) => {
    let bonusNumber = new BonusNumber(input);
    expect(bonusNumber.getBonusNumber()).toEqual(expected);
  });

  test.each([0, 3.3, 46])(
    "잘못된 입력값 %p를 전달할 때 에러를 던진다",
    (input) => {
      expect(() => new BonusNumber(input)).toThrow("[ERROR]");
    }
  );
});
