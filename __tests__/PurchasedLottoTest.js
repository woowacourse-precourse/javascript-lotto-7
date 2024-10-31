import Output from "../src/Output.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Output 클래스 출력 테스트", () => {
  let output;

  beforeEach(() => {
    jest.restoreAllMocks();

    const userPurchaseAmount = 2000;
    const purchasedLottos = [
      [8, 21, 35, 10, 3, 15],
      [42, 19, 6, 33, 7, 23],
    ];
    const winningAndBonusNumber = [[3, 8, 15, 21, 35, 10], 42];
    const totalLottoCount = 2;

    output = new Output(
      userPurchaseAmount,
      winningAndBonusNumber,
      totalLottoCount,
      purchasedLottos
    );
  });

  test("printSortedLottoNumbers는 올바른 로또 구매 개수와 정렬된 번호를 출력해야 한다", () => {
    // given
    const logSpy = getLogSpy();

    // when
    output.printSortedLottoNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith("2개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith("[3, 8, 10, 15, 21, 35]");
    expect(logSpy).toHaveBeenCalledWith("[6, 7, 19, 23, 33, 42]");
  });

  test("로또 게임의 결과 형식 확인", () => {
    // given
    const logSpy = getLogSpy();
    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    // when
    output.printResult();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
