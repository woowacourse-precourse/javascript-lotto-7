import LottoRanker from "../src/model/LottoRanker.js";
import { PRIZE } from "../src/constants.js";
import Lotto from "../src/model/Lotto.js";

describe("LottoRanker 클래스 테스트", () => {
  let lottoRanker;

  beforeEach(() => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottoRanker = new LottoRanker(winningNumbers, bonusNumber);
  });

  test("countWinning()는 당첨 횟수를 올바르게 기록한다", () => {
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 7]); // 5개 일치 + 보너스
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]); // 6개 일치
    const lotto3 = new Lotto([1, 2, 3, 4, 8, 9]); // 4개 일치
    const lotto4 = new Lotto([1, 2, 3, 10, 11, 12]); // 3개 일치
    const lotto5 = new Lotto([1, 2, 13, 14, 15, 16]); // 2개 일치

    const winningResult = lottoRanker.countWinning([
      lotto1,
      lotto2,
      lotto3,
      lotto4,
      lotto5,
    ]);

    expect(winningResult).toEqual({
      3: 1,
      4: 1,
      5: 0,
      5.5: 1,
      6: 1,
    });
  });

  test("calculateReturnRate()는 정확한 수익률을 계산한다", () => {
    lottoRanker.winning = { 3: 1, 4: 1, 5: 1, 5.5: 1, 6: 1 };
    const payment = 5000;

    const returnRate = lottoRanker.calculateReturnRate(payment);

    const expectedTotalPrize =
      PRIZE[3] * 1 +
      PRIZE[4] * 1 +
      PRIZE[5] * 1 +
      PRIZE[5.5] * 1 +
      PRIZE[6] * 1;
    const expectedReturnRate = ((expectedTotalPrize / payment) * 100).toFixed(
      1
    );

    expect(returnRate).toBe(expectedReturnRate);
  });
});
