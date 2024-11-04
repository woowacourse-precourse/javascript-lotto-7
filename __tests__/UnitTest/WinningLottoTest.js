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
    const winningResult = WinningLotto.#resultLotto(
      lottos,
      winningNumbers,
      bonusNumber
    );

    expect(winningResult).toStrictEqual(expectedResult);
  });
});
