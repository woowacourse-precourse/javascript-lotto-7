import { Random } from "@woowacourse/mission-utils";
import TotalLotto from "../../src/domains/TotalLotto";
import WinningLotto from "../../src/domains/WinningLotto";

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.map((number) =>
    Random.pickUniqueNumbersInRange.mockReturnValueOnce(number)
  );
};

describe("WinningLotto 클래스 테스트", () => {
  test("당첨 번호에 따른 당첨 결과", () => {
    const expectedResult = [1, 1, 1, 1, 1];
    const winningNumbers = [3, 5, 8, 15, 22, 34];
    const bonusNumber = 13;
    const totalLotto = [
      [1, 2, 3, 4, 6, 7],
      [1, 2, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 8],
      [3, 5, 8, 15, 16, 17],
      [3, 5, 8, 15, 22, 23],
      [3, 5, 8, 13, 15, 22],
      [3, 5, 8, 15, 22, 34],
    ];

    mockRandoms(totalLotto);
    const lottos = new TotalLotto(totalLotto.length).getLottos();

    const winningLotto = new WinningLotto(lottos, winningNumbers, bonusNumber);
    const winningResult = winningLotto.resultLotto();

    expect(winningResult).toStrictEqual(expectedResult);
  });

  test("수익률 출력", () => {
    const expectedResult = 62.5;
    const totalLotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    mockRandoms(totalLotto);
    const lottos = new TotalLotto(totalLotto.length).getLottos();
    const winningLotto = new WinningLotto(lottos, winningNumbers, bonusNumber);
    winningLotto.resultLotto();
    const winningPercent = winningLotto.caculatePercent();

    expect(winningPercent).toStrictEqual(expectedResult);

  });
});
