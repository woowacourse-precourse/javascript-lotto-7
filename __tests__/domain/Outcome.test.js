import Outcome from "../../src/domain/Opportunity/Outcome.js";
import LOTTO_RANK from "../../src/constant/Rank.js";

describe("Outcome 도메인 테스트", () => {
  test("등수별 당첨금 총액이 정확히 계산된다", () => {
    // given
    const outcome = new Outcome();
    const stats = {
      fifth: 1,
      fourth: 2,
      third: 1,
      second: 1,
      first: 0,
    };

    // when
    outcome.calculateOutcome(stats);

    // then
    const expectedOutcome =
      (LOTTO_RANK.fifth.prize * 1) +
      (LOTTO_RANK.fourth.prize * 2) +
      (LOTTO_RANK.third.prize * 1) +
      (LOTTO_RANK.second.prize * 1);

    expect(outcome.outcome).toBe(expectedOutcome);
  });
});
