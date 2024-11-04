import LottoCalculator from '../src/Models/LottoCalculator.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('로또당첨계산기 클래스 테스트', () => {
  test('계산기 테스트', () => {
    const lottoCalculator = new LottoCalculator();
    const mockPurchaseAmount = 8000;
    const mockLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const mockWinningNumbers = [1, 2, 3, 4, 5, 6];
    const mockBonusNumber = 7;

    const result = lottoCalculator.getResult(
      mockPurchaseAmount,
      mockLottos,
      mockWinningNumbers,
      mockBonusNumber,
    );

    expect(result).toStrictEqual({
      winningStatistics: {
        '1st': 0,
        '2nd': 0,
        '3rd': 0,
        '4th': 0,
        '5th': 1,
      },
      profitRate: 62.5,
    });
  });

  test('2등일때 테스트', () => {
    const lottoCalculator = new LottoCalculator();
    const mockPurchaseAmount = 8000;
    const mockLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const mockWinningNumbers = [2, 13, 22, 32, 38, 1];
    const mockBonusNumber = 45;

    const result = lottoCalculator.getResult(
      mockPurchaseAmount,
      mockLottos,
      mockWinningNumbers,
      mockBonusNumber,
    );

    expect(result).toStrictEqual({
      winningStatistics: {
        '1st': 0,
        '2nd': 1,
        '3rd': 0,
        '4th': 0,
        '5th': 0,
      },
      profitRate: 375000,
    });
  });
});
