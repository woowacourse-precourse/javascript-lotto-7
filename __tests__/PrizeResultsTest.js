import PrizeResults from '../src/components/PrizeResults.js';

describe('PrizeResults 클래스 테스트', () => {
  let prizeResults;

  beforeEach(() => {
    prizeResults = new PrizeResults();
  });

  test('save - 당첨 번호 개수에 따른 결과 저장', () => {
    prizeResults.save(3, false);
    prizeResults.save(4, false);
    prizeResults.save(4, false);
    prizeResults.save(6, false);

    const results = prizeResults.get();

    expect(results.get(3)).toBe(1);
    expect(results.get(4)).toBe(2);
    expect(results.get(6)).toBe(1);
  });

  test('saveWithBonus - 당첨 번호 5개와 보너스 번호 유무에 따른 결과 저장', () => {
    prizeResults.save(5, true);
    prizeResults.save(5, false);
    prizeResults.save(5, true);

    const results = prizeResults.get();

    expect(results.get(5).withBonus).toBe(2);
    expect(results.get(5).withoutBonus).toBe(1);
  });

  test('get - 전체 결과 반환', () => {
    prizeResults.save(3, false);
    prizeResults.save(4, false);
    prizeResults.save(5, true);

    const results = prizeResults.get();

    expect(results).toBeInstanceOf(Map);
    expect(results.get(3)).toBe(1);
    expect(results.get(4)).toBe(1);
    expect(results.get(5).withBonus).toBe(1);
  });
});
