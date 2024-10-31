import LottoResult from "../../src/Class/LottoResult";

describe('로또 당첨 결과 클래스 기능 테스트', () => {
  test('구매 내역과 당첨 번호, 보너스 번호로 인스턴스화', () => {
    // given
    const lottoList = [
      [1, 8, 9, 10, 11, 12],
      [1, 2, 13, 14, 15, 16],
      [1, 2, 3, 17, 18, 19, 20],
      [1, 2, 3, 4, 21, 22],
      [1, 2, 3, 4, 5, 23],
      [1, 2, 3, 4, 5, 7],
      [2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6]
    ];
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const expectedResult = new Map([
      ['3개 일치', { count : 1, winningAmount: 5000 }],
      ['4개 일치', { count : 1, winningAmount: 50000 }],
      ['5개 일치', { count : 1, winningAmount: 1500000 }],
      ['5개 일치, 보너스 볼 일치', { count : 2, winningAmount: 30000000 }],
      ['6개 일치', { count : 1, winningAmount: 2000000000 }],
    ]);
    const expectedValues = [ ...expectedResult.values()];

    // when
    const winningStats = new LottoResult(lottoList, winNumbers, bonusNumber).getResult;
    const winningStatsValues = [ ...winningStats.values() ];

    // then
    winningStatsValues.forEach((stats, index) => {
      const count = stats.count;
      const winningAmount = stats.winningAmount;

      const expectedCount = expectedValues[index].count;
      const expectedWinningAmount = expectedValues[index].winningAmount;

      expect(count).toBe(expectedCount);
      expect(winningAmount).toBe(expectedWinningAmount);
    })
  })
});