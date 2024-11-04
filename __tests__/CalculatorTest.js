import { calculateProfitRate } from "../src/utils/calculator.js";

describe("Profit Calculator", () => {
  test("수익률을 소수 둘째 자리에서 반올림하여 계산", () => {
    const totalPrize = 50000;
    const purchaseAmount = 2000;
    const expectedProfitRate =
      Math.round((totalPrize / purchaseAmount) * 100 * 100) / 100;

    expect(calculateProfitRate(totalPrize, purchaseAmount)).toBe(
      expectedProfitRate
    );
  });
});
