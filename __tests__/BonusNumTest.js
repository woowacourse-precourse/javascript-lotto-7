import { validateBonusNumber } from "../src/validator/BonusNum";

describe("입력 보너스 번호 테스트", () => {
  const notNumber = NaN;
  const notInRangeNumber = [0, -3, 99];

  test("로또 번호에 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(notNumber);
    }).toThrow("[ERROR]");
  });

  test.each(notInRangeNumber)(
    "로또 번호는 1~45 이외의 범위가 포함되면 예외가 발생한다.",
    (bonusNumber) => {
      expect(() => {
        validateBonusNumber(bonusNumber);
      }).toThrow("[ERROR]");
    }
  );
});
