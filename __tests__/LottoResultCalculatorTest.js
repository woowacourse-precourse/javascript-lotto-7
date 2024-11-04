import LottoResultCalculator from "../src/LottoResultCalculator";
import Constants from "../src/Constants";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("LottoResultCalculator 클래스 테스트", () => {
  let calculator;

  beforeEach(() => {
    const purchaselottoList = [
      [1, 2, 3, 4, 5, 6],  
      [1, 2, 3, 4, 5, 7],  
      [1, 2, 3, 4, 5, 8],  
      [1, 2, 3, 4, 9, 10], 
      [1, 2, 3, 11, 12, 13] 
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    
    calculator = new LottoResultCalculator(purchaselottoList, winningNumbers, bonusNumber);
  });

  test("출력 형식 및 통계 테스트", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print").mockClear();

    calculator.printResultCalculate(5000);

    const expectedLogs = [
      "당첨 통계\n---",
      "6개 일치 (2,000,000,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "3개 일치 (5,000원) - 1개",
      "총 수익률은 40631100.0%입니다.",
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    logSpy.mockRestore();
  });
});
