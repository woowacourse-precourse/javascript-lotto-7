import LottoResultCalculator from "../src/model/LottoResultCalculator.js";

describe("결과 계산기 테스트", () => {
  let calculate;

  beforeEach(() => {
    calculate = new LottoResultCalculator();
  });

  test("compareWithWinningNumbers 기능 테스트", () => {
    const randomNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [1, 2, 3, 8, 9, 10],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const result = calculate.compareWithWinningNumbers(
      randomNumbers,
      winningNumbers
    );
    expect(result.remainingNumbers).toEqual([[8, 9, 10]]);

    expect(result.firstPlaceWinning).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  test("compareWithBonusNumber 기능 테스트", () => {
    const initialRemainingNumbers = [[8, 9, 10]];
    const bonusNumber = 8;
    const result = calculate.compareWithBonusNumber(
      initialRemainingNumbers,
      bonusNumber
    );
    expect(result).toEqual([[9, 10]]);
  });

  test("calculateWinningRank 기능 테스트", () => {
    const randomNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [1, 2, 3, 8, 9, 10],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const expectedRankCounts = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 1,
      fifth: 0,
    };
    const result = calculate.calculateWinningRank(
      randomNumbers,
      winningNumbers,
      bonusNumber
    );
    expect(result).toEqual(expectedRankCounts);
  });

  test("calculateProfitRate 기능 테스트", () => {
    const amount = 2000;
    const rankCounts = {
      first: 1,
      second: 0,
      third: 0,
      fourth: 1,
      fifth: 0,
    };
    const result = calculate.calculateProfitRate(amount, rankCounts);
    expect(result).toEqual("100,002,500");
  });
});
