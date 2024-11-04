import { LottoResult } from './index.js';

describe('LottoResult', () => {
  describe('getWinningCount', () => {
    test('1등을 5개 추가할 경우 1등에는 5개를 반환하고 그 외에는 0을 반환한다.', () => {
      const lottoResult = new LottoResult();

      lottoResult.addWinning(1);
      lottoResult.addWinning(1);
      lottoResult.addWinning(1);
      lottoResult.addWinning(1);
      lottoResult.addWinning(1);

      expect(lottoResult.getWinningCount(1)).toBe(5);
      expect(lottoResult.getWinningCount(2)).toBe(0);
      expect(lottoResult.getWinningCount(3)).toBe(0);
      expect(lottoResult.getWinningCount(4)).toBe(0);
      expect(lottoResult.getWinningCount(5)).toBe(0);
      expect(lottoResult.getWinningCount(6)).toBe(0);
    });

    test('0등(순위권 밖)만 5개 추가할 경우 모두 0을 반환한다.', () => {
      const lottoResult = new LottoResult();

      lottoResult.addWinning(0);
      lottoResult.addWinning(0);
      lottoResult.addWinning(0);
      lottoResult.addWinning(0);
      lottoResult.addWinning(0);

      expect(lottoResult.getWinningCount(1)).toBe(0);
      expect(lottoResult.getWinningCount(2)).toBe(0);
      expect(lottoResult.getWinningCount(3)).toBe(0);
      expect(lottoResult.getWinningCount(4)).toBe(0);
      expect(lottoResult.getWinningCount(5)).toBe(0);
      expect(lottoResult.getWinningCount(6)).toBe(0);
    });
  });

  describe('getTotalPrizeMoney', () => {
    test('1등을 5개 추가할 경우 전체 상금인 10_000_000_000원을 반환한다.', () => {
      const lottoResult = new LottoResult();

      lottoResult.addWinning(1);
      lottoResult.addWinning(1);
      lottoResult.addWinning(1);
      lottoResult.addWinning(1);
      lottoResult.addWinning(1);

      expect(lottoResult.getTotalPrizeMoney()).toBe(10_000_000_000);
    });

    test('0등(순위권 밖)만 5개 추가할 경우 모두 상금 0원을 반환한다.', () => {
      const lottoResult = new LottoResult();

      lottoResult.addWinning(0);
      lottoResult.addWinning(0);
      lottoResult.addWinning(0);
      lottoResult.addWinning(0);
      lottoResult.addWinning(0);

      expect(lottoResult.getTotalPrizeMoney()).toBe(0);
    });
  });
});
