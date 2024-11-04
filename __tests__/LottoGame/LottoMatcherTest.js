import LottoMatcher from "../../src/LottoGame/Features/LottoMatcher.js";

describe("LottoMatcher", () => {
  test("6개 숫자가 모두 일치할 때 1등을 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [[1, 2, 3, 4, 5, 6]];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([1]);
  });

  test("5개 숫자가 일치하고 보너스 번호가 일치할 때 2등을 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [[1, 2, 3, 4, 5, 7]];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([2]);
  });

  test("5개 숫자가 일치하고 보너스 번호가 일치하지 않을 때 3등을 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [[1, 2, 3, 4, 5, 8]];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([3]);
  });

  test("4개 숫자가 일치할 때 4등을 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [[1, 2, 3, 4, 10, 11]];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([4]);
  });

  test("3개 숫자가 일치할 때 5등을 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [[1, 2, 3, 10, 11, 12]];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([5]);
  });

  test("2개 이하의 숫자가 일치할 때 0등을 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      [1, 2, 10, 11, 12, 13],
      [1, 10, 11, 12, 13, 14],
    ];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([0, 0]);
  });

  test("다양한 로또 번호를 전달할 때 각각의 랭크를 올바르게 반환한다", () => {
    const targetNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 10, 11],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 10, 11, 12, 13],
    ];
    const matcher = new LottoMatcher(targetNumbers, bonusNumber, lottos);
    expect(matcher.getRanks()).toEqual([1, 2, 3, 4, 5, 0]);
  });
});
