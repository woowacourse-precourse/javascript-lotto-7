import CalculateProfitModel from "../src/model/CalculateProfitModel";

describe("수익률 계산 테스트", () => {
  const calculateProfit = new CalculateProfitModel();

  const WINNING_COUNT = [1, 0, 0, 0, 0];
  const LOTTO_PRICE = 8000;
  const EXPECT_VALUE = 62.5;

  test("수익률을 계산한다", () => {
    const testAnswer = calculateProfit.getRate(WINNING_COUNT, LOTTO_PRICE);
    expect(testAnswer).toEqual(EXPECT_VALUE);
  });
});
