import App from "../src/App";

describe("당첨 번호와 보너스 번호의 일치 결과를 올바르게 계산하는 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    const allLottos = [
      { getMatchResult: () => ({ matchedCount: 6, hasBonus: false }) },
      { getMatchResult: () => ({ matchedCount: 5, hasBonus: true }) },
      { getMatchResult: () => ({ matchedCount: 5, hasBonus: false }) },
      { getMatchResult: () => ({ matchedCount: 4, hasBonus: false }) },
      { getMatchResult: () => ({ matchedCount: 3, hasBonus: false }) },
      { getMatchResult: () => ({ matchedCount: 2, hasBonus: false }) },
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const app = new App();
    const counts = app.calculateMatches(allLottos, winningNumbers, bonusNumber);
    expect(counts[6]).toBe(1);
    expect(counts["5_bonus"]).toBe(1);
    expect(counts[5]).toBe(1);
    expect(counts[4]).toBe(1);
    expect(counts[3]).toBe(1);
    expect(counts[2]).toBeUndefined();
  });
});
