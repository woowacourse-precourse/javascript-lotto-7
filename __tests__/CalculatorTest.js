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

  test("여러 개의 당첨 결과 조합 - 총 당첨금 계산 확인", () => {
    const matchCounts = {
      3: 2, // 2개 일치
      4: 1, // 1개 일치
      5: 1, // 1개 일치
      "5+bonus": 0, // 보너스 포함된 5개 일치 0개
      6: 0, // 6개 일치 0개
    };
    const totalWinnings =
      Calculator.calculateTotalWinnings(
        matchCounts
      );
    expect(totalWinnings).toBe(1550000); // 2*5000 + 1*50000 + 1*1500000
  });

  test("1등과 2등 포함 시 총 당첨금 계산 확인", () => {
    const matchCounts = {
      3: 0,
      4: 0,
      5: 0,
      "5+bonus": 1,
      6: 1,
    };
    const totalWinnings =
      Calculator.calculateTotalWinnings(
        matchCounts
      );
    expect(totalWinnings).toBe(2030000000); // 1*30000000 + 1*2000000000
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

  test("수익률이 100%일 때", () => {
    const totalWinnings = 10000;
    const purchaseAmount = 10000;
    const returnRate =
      Calculator.calculateReturnRate(
        totalWinnings,
        purchaseAmount
      );
    expect(returnRate).toBe("100.0");
  });

  test("수익률이 0%일 때", () => {
    const totalWinnings = 0;
    const purchaseAmount = 10000;
    const returnRate =
      Calculator.calculateReturnRate(
        totalWinnings,
        purchaseAmount
      );
    expect(returnRate).toBe("0.0");
  });
});
