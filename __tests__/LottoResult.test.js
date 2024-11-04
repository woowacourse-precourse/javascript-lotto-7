import LottoResult from '../src/LottoResult.js';
import { PRIZE } from '../src/constants.js';

describe('LottoResult 클래스 테스트', () => {
  test('당첨 결과가 올바르게 초기화된다', () => {
    const result = new LottoResult(8000);
    const results = result.getResults();

    expect(results.get(PRIZE.FIRST.MESSAGE)).toBe(0);
    expect(results.get(PRIZE.SECOND.MESSAGE)).toBe(0);
    expect(results.get(PRIZE.THIRD.MESSAGE)).toBe(0);
    expect(results.get(PRIZE.FOURTH.MESSAGE)).toBe(0);
    expect(results.get(PRIZE.FIFTH.MESSAGE)).toBe(0);
  });

  test('당첨 결과가 올바르게 추가된다', () => {
    const result = new LottoResult(8000);

    result.addResult(3, false); // 5등
    result.addResult(4, false); // 4등
    result.addResult(3, false); // 5등

    const results = result.getResults();
    expect(results.get(PRIZE.FIFTH.MESSAGE)).toBe(2);
    expect(results.get(PRIZE.FOURTH.MESSAGE)).toBe(1);
  });

  test('총 상금이 올바르게 계산된다', () => {
    const result = new LottoResult(8000);

    result.addResult(3, false); // 5등: 5,000원
    result.addResult(4, false); // 4등: 50,000원
    result.addResult(3, false); // 5등: 5,000원

    const totalPrize = result.calculateTotalPrize();
    expect(totalPrize).toBe(60000);
  });

  test('수익률이 올바르게 계산된다', () => {
    const result = new LottoResult(8000);

    result.addResult(3, false); // 5등: 5,000원
    result.addResult(4, false); // 4등: 50,000원

    const profitRate = result.calculateProfitRate();
    expect(profitRate).toBe('687.5');
  });

  test('2등 당첨이 올바르게 처리된다', () => {
    const result = new LottoResult(8000);

    result.addResult(5, true); // 2등

    const results = result.getResults();
    expect(results.get(PRIZE.SECOND.MESSAGE)).toBe(1);
    expect(results.get(PRIZE.THIRD.MESSAGE)).toBe(0);
  });
});
