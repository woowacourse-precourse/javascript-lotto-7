import WinningLotto from "../../src/domain/WinningLotto/WinningLotto.js";
import { DOMAIN_ERRORS } from "../../src/constant/Error.js";

describe("WinningLotto 도메인 테스트", () => {
  test("1-45를 벗어난 당첨 번호를 입력하면 예외가 발생한다", () => {
    // given
    const invalidNumbers = [1, 2, 3, 4, 5, 46];

    // when & then
    expect(() => {
      WinningLotto.create(invalidNumbers);
    }).toThrow(DOMAIN_ERRORS.OUT_OF_RANGE);
  });

  test("중복된 당첨 번호를 입력하면 예외가 발생한다", () => {
    // given
    const duplicateNumbers = [1, 2, 3, 4, 4, 5];

    // when & then
    expect(() => {
      WinningLotto.create(duplicateNumbers);
    }).toThrow(DOMAIN_ERRORS.DUPLICATE_NUMBER);
  });

  test("당첨 번호와 중복되는 보너스 번호를 입력하면 예외가 발생한다", () => {
    // given
    const winningLotto = WinningLotto.create([1, 2, 3, 4, 5, 6]);
    const duplicateBonus = 1;

    // when & then
    expect(() => {
      winningLotto.addBonusNumber(duplicateBonus);
    }).toThrow(DOMAIN_ERRORS.DUPLICATE_BONUS);
  });

  test("정상적인 당첨 번호와 보너스 번호가 입력되면 생성된다", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    // when
    const winningLotto = WinningLotto.create(numbers);
    winningLotto.addBonusNumber(bonusNumber);

    // then
    expect(winningLotto.numbers).toEqual(numbers);
    expect(winningLotto.bonusNumber).toBe(bonusNumber);
  });
});
