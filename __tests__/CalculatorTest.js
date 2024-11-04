import Calculator from "../src/Calculator";

describe("당첨 내역 및 수익률 계산 테스트", () => {
  test("당첨 개수에 따른 총 당첨금 계산 확인", () => {
    const matchCounts = {
      3: 1,
      4: 0,
      5: 0,
      "5+bonus": 0,
      6: 0,
    };
    const totalWinnings =
      Calculator.calculateTotalWinnings(
        matchCounts
      );
    expect(totalWinnings).toBe(5000);
  });

  test("구입 금액 대비 수익률 계산 확인", () => {
    const totalWinnings = 5000;
    const purchaseAmount = 8000;
    const returnRate =
      Calculator.calculateReturnRate(
        totalWinnings,
        purchaseAmount
      );
    expect(returnRate).toBe("62.5");
  });
});
