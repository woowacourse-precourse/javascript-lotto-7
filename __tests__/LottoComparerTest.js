import LottoComparer from '../src/model/LottoComparer';

describe('LottoComparer', () => {
  test.each([
    {
      lottoNumbers: [1, 2, 3, 4, 5, 6],
      winningNumbers: [1, 2, 3, 7, 8, 9],
      bonusNumber: 6,
      expectedMatchCount: 3,
      expectedBonusMatch: true,
    },
    {
      lottoNumbers: [10, 11, 12, 13, 14, 15],
      winningNumbers: [10, 11, 12, 16, 17, 18],
      bonusNumber: 20,
      expectedMatchCount: 3,
      expectedBonusMatch: false,
    },
    {
      lottoNumbers: [21, 22, 23, 24, 25, 26],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 45,
      expectedMatchCount: 0,
      expectedBonusMatch: false,
    },
  ])(
    '로또 번호와 당첨 번호 비교 테스트: $lottoNumbers',
    ({
      lottoNumbers,
      winningNumbers,
      bonusNumber,
      expectedMatchCount,
      expectedBonusMatch,
    }) => {
      const result = LottoComparer.compare(
        lottoNumbers,
        winningNumbers,
        bonusNumber,
      );

      expect(result.matchCount).toBe(expectedMatchCount);
      expect(result.bonusMatch).toBe(expectedBonusMatch);
    },
  );
});
