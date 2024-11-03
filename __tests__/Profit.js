import Profit from '../src/domain/Profit.js';

describe('수익 클래스 테스트', () => {
  test.each([
    [8000, [1, 0, 0, 0, 0], '62.5'],
    [50000, [0, 1, 0, 0, 0], '100.0'],
    [200000, [0, 0, 0, 0, 1], '1,000,000.0'],
  ])('올바른 수익률 도출 테스트', (initialMoney, rankCounter, expectedProfit) => {
    // given
    const profit = new Profit(initialMoney, rankCounter);

    // when, then
    expect(profit.getProfit()).toEqual(expectedProfit);
  });
});
