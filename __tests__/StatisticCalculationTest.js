import StatisticCalculation from '../src/components/StatisticCalculation';

describe('calculateStatistics 함수 테스트', () => {
  test('정상적인 상금 통계 계산 및 ROI 반환', () => {
    const inputMoney = 10000;
    const prizes = new Map([
      [3, 1],
      [4, 2],
      [5, { withoutBonus: 1, withBonus: 1 }],
      [6, 0],
    ]);

    const statistics = StatisticCalculation(prizes, inputMoney);

    const expectedTotalReturn =
      1 * 5000 + 2 * 50000 + 1 * 1500000 + 1 * 30000000;
    const expectedROI = ((expectedTotalReturn / inputMoney) * 100).toFixed(1);

    expect(statistics.get(3).count).toBe(1);
    expect(statistics.get(4).count).toBe(2);
    expect(statistics.get('5withoutBonus').count).toBe(1);
    expect(statistics.get('5withBonus').count).toBe(1);
    expect(statistics.get(6).count).toBe(0);
    expect(statistics.get('ROI')).toBe(expectedROI);
  });
});
