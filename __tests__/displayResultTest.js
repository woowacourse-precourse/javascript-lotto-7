import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("displayResult 테스트", () => {
  test("수익률과 당첨 결과가 올바르게 출력된다.", () => {
    const counts = { 3: 1, 4: 1, 5: 0, "5_bonus": 1, 6: 0 };
    const lottoPurchaseAmount = 5000 * 10;

    const app = new App();
    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");

    app.displayResult(counts, lottoPurchaseAmount);

    expect(consoleSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 1개");
    expect(consoleSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 1개");
    expect(consoleSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
    expect(consoleSpy).toHaveBeenCalledWith(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"
    );
    expect(consoleSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 0개");

    const totalPrize = 5000 * 1 + 50000 * 1 + 30000000 * 1;
    const expectedProfitRate = (
      (totalPrize / lottoPurchaseAmount) *
      100
    ).toFixed(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      `총 수익률은 ${expectedProfitRate}%입니다.`
    );

    consoleSpy.mockRestore();
  });
});
