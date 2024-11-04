import ResultCalculator from "../src/models/ResultCalculator.js";
import Lotto from "../src/models/Lotto.js";
import WinningNumbers from "../src/models/WinningNumbers.js";

describe("ResultCalculator 클래스", () => {
  test("당첨 통계를 정확히 계산해야 합니다.", () => {
    const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
    const lottoTickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 8, 9]),
      new Lotto([1, 2, 3, 10, 11, 12]),
      new Lotto([1, 2, 10, 11, 12, 13]),
    ];

    const statistics = ResultCalculator.calculateWinningStatistics(
      lottoTickets,
      winningNumbers
    );

    expect(statistics.FIRST).toBe(1);
    expect(statistics.SECOND).toBe(1);
    expect(statistics.FOURTH).toBe(1);
    expect(statistics.FIFTH).toBe(1);
    expect(statistics).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 0,
      FOURTH: 1,
      FIFTH: 1,
    });
  });

  test("수익률을 정확히 계산해야 합니다.", () => {
    const statistics = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 1,
    };
    const amountSpent = 8000;
    const returnRate = ResultCalculator.calculateReturnRate(
      statistics,
      amountSpent
    );

    expect(returnRate).toBeCloseTo(62.5);
  });
});
