import ProfitAnalyzer from '../../src/model/ProfitAnalyzer.js';

describe("getRateOfReturn() 테스트", () => {
  test.each([
    { totalPrize: 2000000000, purchaseAmount: 1000, expectedRate: 200000000.0 }, // 수익률 200000000%
    { totalPrize: 30000000, purchaseAmount: 5000, expectedRate: 600000.0 },      // 수익률 600000%
    { totalPrize: 1500000, purchaseAmount: 10000, expectedRate: 15000.0 },       // 수익률 15000%
    { totalPrize: 0, purchaseAmount: 1000, expectedRate: 0.0 },                  // 수익률 0%
    { totalPrize: 50000, purchaseAmount: 50000, expectedRate: 100.0 }            // 수익률 100%
  ])("총 상금과 구입 금액에 대한 수익률 계산", ({ totalPrize, purchaseAmount, expectedRate }) => {
    const profitAnalyzer = new ProfitAnalyzer(totalPrize, purchaseAmount);
    const rateOfReturn = profitAnalyzer.getRateOfReturn();

    expect(rateOfReturn).toBeCloseTo(expectedRate, 1);
  });
});
