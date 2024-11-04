import calculateProfit from "../src/Model/calculateProfit.js";

describe("calculateProfit 함수 테스트", () => {
  test("수익률이 정확하게 계산된다.", () => {
    const RANKS = [
      { prize: 5000, count: 1 },
      { prize: 50000, count: 0 },
      { prize: 1500000, count: 0 },
      { prize: 30000000, count: 0 },
      { prize: 2000000000, count: 0 }
    ];
    const BUDGET = 8000;
    const PROFIT = calculateProfit(RANKS, BUDGET);

    expect(PROFIT).toBe("62.5");
  });
});