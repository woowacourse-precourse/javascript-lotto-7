import { calculateWinningResult } from "../src/Services/calculateWinningResult.js";
import RANKS from "../src/Model/Rank.js";
import Lotto from "../src/Lotto.js";

describe("calculateWinningResult 테스트", () => {
  test("6개 일치하는 경우 1등", () => {
    const lottoTickets = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateWinningResult(
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

  test("5개 일치 + 보너스 번호 일치하는 경우 2등", () => {
    const lottoTickets = [new Lotto([1, 2, 3, 4, 5, 7])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateWinningResult(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(result[RANKS.SIX_MATCH.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH_WITH_BONUS.key]).toBe(1);
    expect(result[RANKS.FIVE_MATCH.key]).toBe(0);
    expect(result[RANKS.FOUR_MATCH.key]).toBe(0);
    expect(result[RANKS.THREE_MATCH.key]).toBe(0);
  });

  test("5개 일치만 하는 경우 3등", () => {
    const lottoTickets = [new Lotto([1, 2, 3, 4, 5, 8])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateWinningResult(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(result[RANKS.SIX_MATCH.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH_WITH_BONUS.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH.key]).toBe(1);
    expect(result[RANKS.FOUR_MATCH.key]).toBe(0);
    expect(result[RANKS.THREE_MATCH.key]).toBe(0);
  });

  test("4개 일치하는 경우 4등", () => {
    const lottoTickets = [new Lotto([1, 2, 3, 4, 9, 10])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateWinningResult(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(result[RANKS.SIX_MATCH.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH_WITH_BONUS.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH.key]).toBe(0);
    expect(result[RANKS.FOUR_MATCH.key]).toBe(1);
    expect(result[RANKS.THREE_MATCH.key]).toBe(0);
  });

  test("3개 일치하는 경우 5등", () => {
    const lottoTickets = [new Lotto([1, 2, 3, 11, 12, 13])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateWinningResult(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(result[RANKS.SIX_MATCH.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH_WITH_BONUS.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH.key]).toBe(0);
    expect(result[RANKS.FOUR_MATCH.key]).toBe(0);
    expect(result[RANKS.THREE_MATCH.key]).toBe(1);
  });

  test("당첨 번호가 없는 경우 결과가 모두 0이어야 함", () => {
    const lottoTickets = [new Lotto([11, 12, 13, 14, 15, 16])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateWinningResult(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    expect(result[RANKS.SIX_MATCH.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH_WITH_BONUS.key]).toBe(0);
    expect(result[RANKS.FIVE_MATCH.key]).toBe(0);
    expect(result[RANKS.FOUR_MATCH.key]).toBe(0);
    expect(result[RANKS.THREE_MATCH.key]).toBe(0);
  });
});
