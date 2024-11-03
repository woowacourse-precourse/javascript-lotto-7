import WinLotto from "../src/WinLotto";
import Lotto from "../src/Lotto";
import { MissionUtils, Console } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("WinLotto 클래스 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("당첨 통계 출력 테스트", () => {
    const purchasedLotto = [
      [1, 2, 3, 4, 5, 6], // 6개 일치
      [1, 2, 3, 4, 5, 7], // 5개 일치 + 보너스
      [1, 2, 3, 4, 5, 8], // 5개 일치
      [1, 2, 3, 4, 9, 10], // 4개 일치
      [1, 2, 3, 11, 12, 13], // 3개 일치
    ];
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    const logSpy = getLogSpy();
    new WinLotto(purchasedLotto, winningLotto, bonusNumber);

    const expectedLogs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("수익률 계산 테스트", () => {
    const purchasedLotto = [
      [1, 2, 3, 4, 5, 6], // 6개 일치
      [1, 2, 3, 4, 5, 7], // 5개 일치 + 보너스
      [1, 2, 3, 4, 5, 8], // 5개 일치
      [1, 2, 3, 4, 9, 10], // 4개 일치
      [1, 2, 3, 11, 12, 13], // 3개 일치
    ];
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    const logSpy = getLogSpy();
    new WinLotto(purchasedLotto, winningLotto, bonusNumber);

    const totalPrize = 2000000000 + 30000000 + 1500000 + 50000 + 5000;
    const purchaseAmount = purchasedLotto.length * 1000;
    const expectedProfitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`총 수익률은 ${expectedProfitRate}%입니다.`));
  });
});
