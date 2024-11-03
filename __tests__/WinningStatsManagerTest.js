import WinningStatsManager from "../src/WinningStatsManager";
import { PRIZE_MONEY_BY_RANK } from "../src/constants";

describe("WinningStatsManager 클래스 테스트", () => {
  const inputs = [
    [6, false],
    [5, true],
  ];

  const winningStats = new WinningStatsManager();
  winningStats.updateWinningStats(inputs);

  test("등수 별 최종 당첨 통계를 얻을 수 있다.", () => {
    expect(winningStats.getStats()).toEqual({
      match_6: 1,
      match_5_bonus: 1,
      match_5: 0,
      match_4: 0,
      match_3: 0,
    });
  });

  test("최종 수익률을 구할 수 있다.", () => {
    winningStats.calculateTotalProfit(PRIZE_MONEY_BY_RANK);

    expect(winningStats.calculateProfitMargin(2000)).toBe("1015000.0");
  });
});
