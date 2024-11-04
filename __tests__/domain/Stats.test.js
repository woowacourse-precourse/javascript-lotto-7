import Stats from "../../src/domain/MyLotto/Stats.js";

describe("Stats 도메인 테스트", () => {
  test("당첨 결과에 따라 각 등수별 당첨 횟수가 정확히 집계된다", () => {
    // given
    const myLottoList = [
      { matchResult: { matchCount: 6, bonusMatch: false } },
      { matchResult: { matchCount: 5, bonusMatch: true } },
      { matchResult: { matchCount: 5, bonusMatch: false } },
      { matchResult: { matchCount: 4, bonusMatch: false } },
      { matchResult: { matchCount: 3, bonusMatch: false } },
      { matchResult: { matchCount: 2, bonusMatch: false } },
      { matchResult: { matchCount: 5, bonusMatch: true } },
      { matchResult: { matchCount: 4, bonusMatch: false } },
    ];

    // when
    const stats = new Stats(myLottoList);

    // then
    expect(stats.first).toBe(1);
    expect(stats.second).toBe(2);
    expect(stats.third).toBe(1);
    expect(stats.fourth).toBe(2);
    expect(stats.fifth).toBe(1);
  });
});
