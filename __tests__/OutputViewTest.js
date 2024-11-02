import Lotto from '../src/Lotto';
import OutputView from '../src/View/OutputView';
import { getLogSpy } from './ApplicationTest';

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
});
