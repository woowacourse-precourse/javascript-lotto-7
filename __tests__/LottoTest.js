import Lotto from "../src/features/lotto/Lotto";
import { printOneLine } from "../src/utils/console";
import { getLogSpy } from "../src/utils/testUtils";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 11], 5],
    [[1, 2, 3, 4, 5, 22], 5],
    [[1, 2, 3, 4, 33, 44], 4],
    [[1, 2, 3, 33, 44, 55], 3],
    [[1, 2, 33, 44, 55, 66], 2],
  ])("로또 일치 개수가 옳은지 판단한다", (userLotto, matchNumber) => {
    const WINNER_LOTTO = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(userLotto);
    expect(lotto.countLottoMatches(WINNER_LOTTO)).toBe(matchNumber);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], false],
    [[1, 2, 3, 4, 5, 11], true],
    [[1, 2, 3, 4, 5, 22], false],
  ])("보너스볼 일치 여부를 판단가능한지 확인한다", (userLotto, matchNumber) => {
    const BONUS_BALL = 11;
    const lotto = new Lotto(userLotto);
    expect(lotto.hasBonusBall(BONUS_BALL)).toBe(matchNumber);
  });
});

describe("로또 클래스 출력 테스트", () => {
  test("로또 numbers가 형식에 맞추어 잘 출력되는지 확인한다.", () => {
    const logSpy = getLogSpy();

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const PRINT_MESSAGE = "[1, 2, 3, 4, 5, 6]";
    printOneLine(lotto.printNumbers());

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(PRINT_MESSAGE));
  });
});
