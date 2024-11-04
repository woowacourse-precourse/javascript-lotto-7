import showResultByLot from "../src/lotto/showResultByLot.js";
import { getLogSpy } from "./ApplicationTest.js";

describe("로또 통계 표시 테스트", () => {
  test("showResultByLot 함수 테스트", () => {
    // given
    const logSpy = getLogSpy();
    const INPUTS = [
      8000,
      [
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 25],
        [20, 21, 22, 23, 24, 25],
        [20, 21, 22, 23, 24, 25],
        [20, 21, 22, 23, 24, 25],
        [20, 21, 22, 23, 24, 25],
        [20, 21, 22, 23, 24, 25],
        [20, 21, 22, 23, 24, 25],
      ],
      [1, 2, 3, 7, 8, 9],
      10,
    ];

    // then
    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];

    showResultByLot(...INPUTS);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
