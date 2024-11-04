//수익률 계산 단위테스트 진행해보장

import EarningsCalculator from '../src/pricing';

describe('EarningsCalculator 수익률 계산 테스트', () => {
  test('수익률 계산', () => {
    const calculator = new EarningsCalculator(8000, 5000);
    expect(calculator.calculateRate()).toBe("62.5"); 
  });

  test('수익률이 0일 때', () => {
    const calculator = new EarningsCalculator(8000, 0);
    expect(calculator.calculateRate()).toBe("0.0");
  });

  test('수익률이 100% 이상일 때', () => {
    const calculator = new EarningsCalculator(8000, 16000);
    expect(calculator.calculateRate()).toBe("200.0");
  });
});