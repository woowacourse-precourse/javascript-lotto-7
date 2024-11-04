import WinningResultCalculator from "../src/Services/WinningResultCalculator.js";
import RANKS from "../src/Model/Rank.js";
import Lotto from "../src/Lotto.js";

describe("WinningResultCalculator 클래스 테스트", () => {
  let winningResultCalculator;

  beforeEach(() => {
    winningResultCalculator = new WinningResultCalculator();
  });

  test("6개 일치하는 경우 1등", () => {
    const lottoTickets = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = winningResultCalculator.calculate(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(result[RANKS.SIX_MATCH.key]).toBe(1);
    expect(result[RANKS.FIVE_MATCH_WITH_BONUS.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH.key]).toBe(0);
    expect(result[RANKS.FOUR_MATCH.key]).toBe(0);
    expect(result[RANKS.THREE_MATCH.key]).toBe(0);
  });

  // 나머지 테스트는 동일한 패턴으로 작성
});
