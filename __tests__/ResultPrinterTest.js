import ResultPrinter from "../src/ResultPrinter";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("ResultPrinter 클래스 테스트", () => {
  test("당첨 결과 출력 테스트", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print").mockImplementation(() => {});
    const purchaseAmount = 8000;
    const results = {
      3: 1,
      4: 0,
      5: 0,
      5.5: 1,
      6: 0
    };
    const printer = new ResultPrinter(purchaseAmount, results);
    printer.printResults();

    expect(logSpy).toHaveBeenCalledWith("\n당첨 통계\n---");
    expect(logSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 1개");
    expect(logSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("5개 일치, 보너스 볼 일치 (30,000,000원) - 1개");
    expect(logSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("총 수익률은 375062.5%입니다.");
  });
});
