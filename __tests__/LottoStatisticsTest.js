import LottoStatistics from "../src/LottoStatistics";
import { WINNING_PRIZES } from "../src/constants.js";
import Lotto from "../src/Lotto.js";

describe("LottoStatistics 클래스 테스트", () => {
  let lottoStatistics;
  let winningLotto;

  beforeEach(() => {
    lottoStatistics = new LottoStatistics();
    winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test("로또 번호와 당첨 번호가 몇 개 일치하는지 계산한다", () => {
    const lotto = new Lotto([1, 2, 7, 8, 9, 10]);
    const matchCount = lottoStatistics.countMatches(lotto, winningLotto);
    expect(matchCount).toBe(2);
  });

  test("일치하는 번호와 보너스 포함 여부를 확인한다", () => {
    const lotto = new Lotto([1, 2, 3, 4, 7, 8]);
    const bonusNumber = 7;
    const result = lottoStatistics.getMatchResult(
      lotto,
      winningLotto,
      bonusNumber
    );

    expect(result.matchCount).toBe(4);
    expect(result.hasBonus).toBe(true);
  });

  test("일치하는 번호와 보너스 여부에 따라 통계를 업데이트한다", () => {
    lottoStatistics.updateStatistics(6, false);
    lottoStatistics.updateStatistics(5, true);
    lottoStatistics.updateStatistics(5, false);
    lottoStatistics.updateStatistics(4, false);
    lottoStatistics.updateStatistics(3, false);

    expect(lottoStatistics.getStatistics()).toEqual({
      first: 1,
      second: 1,
      third: 1,
      fourth: 1,
      fifth: 1,
    });
  });

  test("로또 목록을 기반으로 통계 계산을 수행한다", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 10, 11]),
      new Lotto([1, 2, 3, 12, 13, 14]),
      new Lotto([21, 22, 23, 24, 25, 26]),
    ];
    const bonusNumber = 7;

    lottoStatistics.calculateStatistics(lottos, winningLotto, bonusNumber);

    const stats = lottoStatistics.getStatistics();
    expect(stats.first).toBe(1);
    expect(stats.second).toBe(1);
    expect(stats.third).toBe(1);
    expect(stats.fourth).toBe(1);
    expect(stats.fifth).toBe(1);
  });

  test("총 당첨 금액 계산이 정확히 이루어진다", () => {
    lottoStatistics.statistics = {
      first: 1,
      second: 2,
      third: 0,
      fourth: 3,
      fifth: 4,
    };
    const totalPrize = lottoStatistics.calculateTotalPrize();
    const expectedTotalPrize =
      1 * WINNING_PRIZES.first +
      2 * WINNING_PRIZES.second +
      0 * WINNING_PRIZES.third +
      3 * WINNING_PRIZES.fourth +
      4 * WINNING_PRIZES.fifth;

    expect(totalPrize).toBe(expectedTotalPrize);
  });

  test("수익률 계산이 정확히 이루어진다", () => {
    lottoStatistics.statistics = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    const purchaseAmount = 5000;
    const profitRate = lottoStatistics.calculateProfitRate(purchaseAmount);
    const expectedProfitRate = (WINNING_PRIZES.first / purchaseAmount) * 100;

    expect(profitRate).toBeCloseTo(expectedProfitRate, 2);
  });
});
