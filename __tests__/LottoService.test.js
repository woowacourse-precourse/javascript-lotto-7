import LottoService from '../src/services/LottoService.js';
import { LOTTO_CONFIG } from '../src/constants/lottoConfig.js';
import { ERRORS } from '../src/constants/errors.js';

describe('LottoService 클래스 테스트', () => {
  describe('getWinningResult 메서드 테스트', () => {
    test.each([
      {
        description: '3개 번호 일치하는 경우',
        lottos: [[1, 2, 3, 4, 5, 6]],
        winningNumbers: [1, 2, 3, 7, 8, 9],
        bonusNumber: 10,
        expected: { 3: 1, 4: 0, 5: 0, 5.5: 0, 6: 0 },
      },
      {
        description: '5개 번호 일치 + 보너스 번호 일치하는 경우',
        lottos: [[1, 2, 3, 4, 5, 13]],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 13,
        expected: { 3: 0, 4: 0, 5: 0, 5.5: 1, 6: 0 },
      },
      {
        description: '여러 개의 로또 결과 처리',
        lottos: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 13],
          [1, 2, 3, 4, 7, 8],
          [1, 2, 3, 7, 8, 9],
          [1, 2, 7, 8, 9, 10],
        ],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 13,
        expected: { 3: 1, 4: 1, 5: 0, 5.5: 1, 6: 1 },
      },
    ])('$description', ({ lottos, winningNumbers, bonusNumber, expected }) => {
      const lottoService = new LottoService(lottos, winningNumbers, bonusNumber);
      const result = lottoService.getWinningResult();

      expect(result).toEqual(expected);
    });
  });

  describe('calculateRateOfRevenue 메서드 테스트', () => {
    test.each([
      {
        description: '수익률 계산 - 기본 케이스 (1등)',
        lottos: [[1, 2, 3, 4, 5, 6]],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        purchasePrice: 1000,
        expectedRevenue: 2000000000,
      },
      {
        description: '수익률 계산 - 여러 등수 복합',
        lottos: [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 13],
          [1, 2, 3, 4, 7, 8],
        ],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 13,
        purchasePrice: 3000,
        expectedRevenue: 2030050000,
      },
      {
        description: '수익률 계산 - 당첨금 없는 경우',
        lottos: [[7, 8, 9, 10, 11, 12]],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 13,
        purchasePrice: 1000,
        expectedRevenue: 0,
      },
    ])(
      '$description',
      ({ lottos, winningNumbers, bonusNumber, purchasePrice, expectedRevenue }) => {
        const lottoService = new LottoService(lottos, winningNumbers, bonusNumber);
        lottoService.getWinningResult();
        const rateOfRevenue = lottoService.calculateRateOfRevenue(purchasePrice);

        const expectedRate = ((expectedRevenue / purchasePrice) * 100).toFixed(
          LOTTO_CONFIG.ROUND_TO_FIRST_DECIMAL
        );
        expect(rateOfRevenue).toBe(expectedRate);
      }
    );
  });
});
