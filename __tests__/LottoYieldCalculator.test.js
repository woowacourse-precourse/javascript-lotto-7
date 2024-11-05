import LottoYieldCalculator from "../src/Services/LottoYieldCalculator.js";
import RANKS from "../src/Model/Rank.js";

describe("LottoYieldCalculator 클래스 테스트", () => {
  let lottoYieldCalculator;

  beforeEach(() => {
    lottoYieldCalculator = new LottoYieldCalculator();
  });

  test("1등 당첨이 1개일 때 수익률을 올바르게 계산해야 합니다.", () => {
    const winningResult = {
      [RANKS.SIX_MATCH.key]: 1,
      [RANKS.FIVE_MATCH_WITH_BONUS.key]: 0,
      [RANKS.FIVE_MATCH.key]: 0,
      [RANKS.FOUR_MATCH.key]: 0,
      [RANKS.THREE_MATCH.key]: 0,
    };
    const validatedPrice = 1000;
    const yieldPercentage = lottoYieldCalculator.calculate(
      winningResult,
      validatedPrice
    );

    expect(yieldPercentage).toBe("200000000.0"); // 수익률 계산 확인
  });

  test("3등 당첨이 2개일 때 수익률을 올바르게 계산해야 합니다.", () => {
    const winningResult = {
      [RANKS.SIX_MATCH.key]: 0,
      [RANKS.FIVE_MATCH_WITH_BONUS.key]: 0,
      [RANKS.FIVE_MATCH.key]: 2,
      [RANKS.FOUR_MATCH.key]: 0,
      [RANKS.THREE_MATCH.key]: 0,
    };
    const validatedPrice = 10000;
    const yieldPercentage = lottoYieldCalculator.calculate(
      winningResult,
      validatedPrice
    );

    expect(yieldPercentage).toBe("30000.0"); // 3등 당첨 2개에 따른 수익률 확인
  });

  test("당첨이 없는 경우 수익률이 0%이어야 합니다.", () => {
    const winningResult = {
      [RANKS.SIX_MATCH.key]: 0,
      [RANKS.FIVE_MATCH_WITH_BONUS.key]: 0,
      [RANKS.FIVE_MATCH.key]: 0,
      [RANKS.FOUR_MATCH.key]: 0,
      [RANKS.THREE_MATCH.key]: 0,
    };
    const validatedPrice = 10000;
    const yieldPercentage = lottoYieldCalculator.calculate(
      winningResult,
      validatedPrice
    );

    expect(yieldPercentage).toBe("0.0"); // 당첨이 없을 경우 수익률이 0%
  });

  test("3등과 4등이 각각 1개씩 당첨된 경우 수익률을 올바르게 계산해야 합니다.", () => {
    const winningResult = {
      [RANKS.SIX_MATCH.key]: 0,
      [RANKS.FIVE_MATCH_WITH_BONUS.key]: 0,
      [RANKS.FIVE_MATCH.key]: 1,
      [RANKS.FOUR_MATCH.key]: 1,
      [RANKS.THREE_MATCH.key]: 0,
    };
    const validatedPrice = 5000;
    const yieldPercentage = lottoYieldCalculator.calculate(
      winningResult,
      validatedPrice
    );

    expect(yieldPercentage).toBe("31000.0"); // 3등과 4등 당첨에 따른 수익률 확인
  });
});
