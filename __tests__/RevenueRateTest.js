import RevenueRate from '../src/RevenueRate';

describe('수익률 테스트', () => {
  test('당첨 내역 및 구입 금액을 기반으로 수익률을 계산하는 기능을 test한다.', () => {
    const revenueRate = new RevenueRate();
    revenueRate.calculate(
      8000,
      {
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 0,
        FIFTH: 1
      }
    );
    expect(revenueRate.getRate()).toBe('62.5');
  });
});