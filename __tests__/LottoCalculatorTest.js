import LottoCalculator from "../src/utils/LottoCalculator.js";

describe("LottoCalculator 테스트", () => {
  test("3개 일치 시 5등 (5,000원) 당첨", () => {
    const tickets = [[1, 2, 3, 10, 20, 30]];
    const winningNumbers = [1, 2, 3, 40, 41, 42];
    const bonusNumber = 43;

    const result = LottoCalculator.calculateResults(
      tickets,
      winningNumbers,
      bonusNumber
    );
    expect(result.FIFTH).toBe(1);
  });

  test("4개 일치 시 4등 (50,000원) 당첨", () => {
    const tickets = [[1, 2, 3, 4, 20, 30]];
    const winningNumbers = [1, 2, 3, 4, 41, 42];
    const bonusNumber = 43;

    const result = LottoCalculator.calculateResults(
      tickets,
      winningNumbers,
      bonusNumber
    );
    expect(result.FOURTH).toBe(1);
  });

  test("5개 일치 시 3등 (1,500,000원) 당첨", () => {
    const tickets = [[1, 2, 3, 4, 5, 30]];
    const winningNumbers = [1, 2, 3, 4, 5, 42];
    const bonusNumber = 43;

    const result = LottoCalculator.calculateResults(
      tickets,
      winningNumbers,
      bonusNumber
    );
    expect(result.THIRD).toBe(1);
  });

  test("5개 일치 및 보너스 번호 일치 시 2등 (30,000,000원) 당첨", () => {
    const tickets = [[1, 2, 3, 4, 5, 30]];
    const winningNumbers = [1, 2, 3, 4, 5, 42];
    const bonusNumber = 30;

    const result = LottoCalculator.calculateResults(
      tickets,
      winningNumbers,
      bonusNumber
    );
    expect(result.SECOND).toBe(1);
  });

  test("6개 일치 시 1등 (2,000,000,000원) 당첨", () => {
    const tickets = [[1, 2, 3, 4, 5, 6]];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = LottoCalculator.calculateResults(
      tickets,
      winningNumbers,
      bonusNumber
    );
    expect(result.FIRST).toBe(1);
  });

  test("수익률 계산", () => {
    const result = { FIRST: 1, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1 };
    const purchaseAmount = 10000;

    const profitRate = LottoCalculator.calculateProfitRate(
      result,
      purchaseAmount
    );
    expect(profitRate).toBeCloseTo(20000050, 1);
  });
});
