import BonusNumber from "../../src/domain/WinningLotto/BonusNumber.js";
import { DOMAIN_ERRORS } from "../../src/constant/Error.js";

describe("BonusNumber 도메인 테스트", () => {
  test("당첨 번호와 중복되는 보너스 번호를 생성하면 예외가 발생한다", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const duplicateNumber = 1;

    // when & then
    expect(() => {
      new BonusNumber(duplicateNumber, winningNumbers);
    }).toThrow(DOMAIN_ERRORS.DUPLICATE_BONUS);
  });

  test("보너스 번호가 로또 숫자 범위를 벗어나면 예외가 발생한다", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidNumber = 46;

    // when & then
    expect(() => {
      new BonusNumber(invalidNumber, winningNumbers);
    }).toThrow(DOMAIN_ERRORS.OUT_OF_RANGE);
  });
});
