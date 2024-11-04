import ProfitCalculator from "../../src/LottoGame/Features/ProfitCalculator.js";
import { findInformation } from "../../src/LottoGame/Utils/LottoInformation";

describe("ProfitCalculator", () => {
  test("수익률이 잘 계산되는지 확인한다.", () => {
    const price = 10000;
    const results = [
      { rank: 5, count: 3 },
      { rank: 4, count: 2 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];

    const expectedPrizeSum =
      findInformation(5).prize * 3 + findInformation(4).prize * 2;

    const profitCalculator = new ProfitCalculator(price, results);
    const expectedProfit = ((expectedPrizeSum / price) * 100).toFixed(1) + "%";

    expect(profitCalculator.getProfit()).toBe(expectedProfit);
  });
});
