import calculateProfitability from "../src/CalculateProfitability.js";

describe("calculateProfitability 함수 테스트", () => {
  test("수익률 계산 (5등 당첨)", () => {
    const purchaseMoney = 8000;
    const winningStatistics = [0, 0, 0, 0, 1];

    const profitability = calculateProfitability(
      purchaseMoney,
      winningStatistics
    );
    expect(profitability).toEqual(62.5);
  });
});
