import Profit from '../src/Profit.js';

describe('수익 클래스 테스트', () => {
  test.each([
    [8000, [0, 0, 0, 0, 1], 62.5],
    [50000, [0, 0, 0, 1, 0], 100],
    [200000, [1, 0, 0, 0, 0], 1000000],
  ])(
    '올바른 수익률 도출 테스트',
    (initialMoney, rankCounter, expectedProfit) => {
      // given
      const profit = new Profit(initialMoney, rankCounter);

      // when, then
      expect(profit.getProfit()).toEqual(expectedProfit);
    },
  );
});
