import LottoResultCalculator from '../src/LottoResultCalculator.js';
import { LOTTO_PRIZES } from '../src/constants/LottoSettings.js';

describe('LottoResultCalculator', () => {
  let lottoCalculator;

  beforeEach(() => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottoCalculator = new LottoResultCalculator(winningNumbers, bonusNumber);
  });

  test('getTotalPrize - 로또 결과 맵으로 총 상금이 올바르게 계산되는지 확인', () => {
    const mockLottoResult = new Map([
      [3, 2],
      [4, 1],
      ['5B', 1],
    ]);

    const expectedTotalPrize = LOTTO_PRIZES.get(3) * 2 + LOTTO_PRIZES.get(4) + LOTTO_PRIZES.get('5B');

    const totalPrize = lottoCalculator.getTotalPrize(mockLottoResult);
    expect(totalPrize).toBe(expectedTotalPrize);
  });

  test('getWinningStatistics - 로또 번호 배열로 각 등수별 당첨 통계가 정확하게 계산되는지 확인', () => {
    const mockLottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    const expectedStatistics = new Map([
      [3, 1],
      [4, 1],
      [5, 0],
      ['5B', 1],
      [6, 1],
    ]);

    const statistics = lottoCalculator.getWinningStatistics(mockLottoNumbers);
    expect(statistics).toStrictEqual(expectedStatistics);
  });

  test('getLottoResult - 로또 번호 배열과 구입 금액으로 당첨 결과 및 수익률이 올바르게 반환되는지 확인', () => {
    const mockLottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];
    const purchaseMoney = 1000000;

    const totalPrize = lottoCalculator.getTotalPrize(
      new Map([
        [3, 1],
        [4, 1],
        [5, 0],
        ['5B', 1],
        [6, 1],
      ]),
    );

    const profitRate = lottoCalculator.getProfitRate(totalPrize, purchaseMoney);

    const { lottoResult, profitRate: calculatedProfitRate } = lottoCalculator.getLottoResult(
      mockLottoNumbers,
      purchaseMoney,
    );

    expect(lottoResult).toStrictEqual(
      new Map([
        [3, 1],
        [4, 1],
        [5, 0],
        ['5B', 1],
        [6, 1],
      ]),
    );
    expect(calculatedProfitRate).toBe(profitRate);
  });
});
