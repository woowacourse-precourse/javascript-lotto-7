import LottoResult from '../src/LottoResult.js';
import { PRIZE } from '../src/constants.js';

describe('LottoResult 클래스 테스트', () => {
  test('당첨 결과가 올바르게 초기화된다', () => {
    const result = new LottoResult(8000);
    const results = result.getResults();

    const messages = [
      '3개 일치 (5,000원)',
      '4개 일치 (50,000원)',
      '5개 일치 (1,500,000원)',
      '5개 일치, 보너스 볼 일치 (30,000,000원)',
      '6개 일치 (2,000,000,000원)',
    ];

    messages.forEach((message) => {
      expect(results.find(([msg, count]) => msg === message)[1]).toBe(0);
    });
  });

  test('당첨 결과가 올바르게 추가된다', () => {
    const result = new LottoResult(8000);

    result.addResult(3, false); // 5등
    result.addResult(4, false); // 4등
    result.addResult(3, false); // 5등

    const results = new Map(result.getResults());
    expect(results.get('3개 일치 (5,000원)')).toBe(2);
    expect(results.get('4개 일치 (50,000원)')).toBe(1);
  });

  test('2등 당첨이 올바르게 처리된다', () => {
    const result = new LottoResult(8000);

    result.addResult(5, true); // 2등

    const results = new Map(result.getResults());
    expect(results.get('5개 일치, 보너스 볼 일치 (30,000,000원)')).toBe(1);
    expect(results.get('5개 일치 (1,500,000원)')).toBe(0);
  });

  test('수익률이 올바르게 계산된다', () => {
    const result = new LottoResult(8000);

    result.addResult(3, false); // 5등: 5,000원
    result.addResult(4, false); // 4등: 50,000원

    const profitRate = result.calculateProfitRate();
    expect(profitRate).toBe('687.5');
  });
});
