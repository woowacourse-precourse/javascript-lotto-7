import Lotto from '../../src/Domain/Lotto';
import OutputView from '../../src/View/OutputView';
import { getLogSpy } from '../ApplicationTest';

describe('OutputView 테스트', () => {
  test('발행한 로또의 번호 생성 결과를 출력한다.', async () => {
    const logSpy = getLogSpy();
    const lottoQuantity = 3;
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
    ];

    const outputView = new OutputView();
    outputView.printLottoNumbers(lottoQuantity, lottos);

    const logs = [
      '3개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 통계를 출력한다.', async () => {
    const logSpy = getLogSpy();
    const totalWinningRank = [1, 0, 0, 2, 0];

    const outputView = new OutputView();
    outputView.printWinningStatistics(totalWinningRank);

    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 2개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('총 수익률을 출력한다.', async () => {
    const logSpy = getLogSpy();
    const totalReturnRate = 62.5;

    const outputView = new OutputView();
    outputView.printTotalReturnRate(totalReturnRate);

    const logs = ['총 수익률은 62.5%입니다.'];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
