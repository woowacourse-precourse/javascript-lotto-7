import ReturnRateCalculator from '../src/ReturnRateCalculator.js';

describe('수익률 계산 클래스 테스트', () => {
  test('당첨된 로또가 없으면 수익률은 0이 된다', () => {
    const logs = [
      { matchCount: 3, count: 0, bonusNumber: false, prizeMoney: 5000 },
      { matchCount: 4, count: 0, bonusNumber: false, prizeMoney: 50000 },
      { matchCount: 5, count: 0, bonusNumber: false, prizeMoney: 1500000 },
      { matchCount: 5, count: 0, bonusNumber: true, prizeMoney: 30000000 },
      { matchCount: 6, count: 0, bonusNumber: false, prizeMoney: 2000000000 },
    ];

    const purchaseAmount = 5000;

    const returnRateCalculator = new ReturnRateCalculator();

    const returnRate = returnRateCalculator.calculateReturnRate(logs, purchaseAmount);

    expect(returnRate).toBe(0);
  });

  test('구매 금액이 정상적으로 계산 된다.', () => {
    const logs = [
      { matchCount: 3, count: 1, bonusNumber: false, prizeMoney: 5000 },
      { matchCount: 4, count: 1, bonusNumber: false, prizeMoney: 50000 },
      { matchCount: 5, count: 0, bonusNumber: false, prizeMoney: 1500000 },
      { matchCount: 5, count: 0, bonusNumber: true, prizeMoney: 30000000 },
      { matchCount: 6, count: 0, bonusNumber: false, prizeMoney: 2000000000 },
    ];

    const purchaseAmount = 5000;

    const returnRateCalculator = new ReturnRateCalculator();

    const returnRate = returnRateCalculator.calculateReturnRate(logs, purchaseAmount);

    expect(returnRate).toBe(1100);
  });
});
