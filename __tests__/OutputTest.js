import OutputView from '../src/view/OutputView';
import LottoResult from '../src/model/LottoResult';
import { getLogSpy } from '../src/utils/test/testUtils';

jest.mock('../src/model/LottoResult', () => {
  return jest.fn().mockImplementation(() => ({
    getResult: jest.fn(),
  }));
});

describe('출력 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('구매 내역 출력 테스트', async () => {
    // given
    const logSpy = getLogSpy();

    const LOTTOS = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    // when
    const outputView = new OutputView();
    outputView.printLottoPurchaseHistory(LOTTOS);

    // then
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 통계 출력 테스트', async () => {
    // given
    const logSpy = getLogSpy();

    const RESULT = {
      1: 0,
      2: 0,
      3: 0,
      4: 1,
      5: 0,
    };
    const PROFIT_RATE = '100.0';

    LottoResult.mockImplementation(() => ({
      getResult: jest.fn().mockReturnValue(RESULT),
    }));

    // when
    const outputView = new OutputView();
    const lottoResult = new LottoResult();
    outputView.printWinningStatistics(lottoResult);
    outputView.printProfitRate(PROFIT_RATE);

    // then
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 100.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
