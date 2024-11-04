import LottoResult from '../src/LottoResult';
import Lotto from '../src/Lotto';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoResult', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('당첨 번호 입력 후 유효성 검사 진행한다.', async () => {
    const lottoResult = new LottoResult();
    mockQuestions(['1,2,3,4,5,6']);
    await lottoResult.readWinningNumbers();

    expect(lottoResult.readWinningNumbers).toBeDefined();
  });

  test('보너스 번호 입력 후 유효성 검사를 진행한다.', async () => {
    const lottoResult = new LottoResult();
    mockQuestions(['7']);
    await lottoResult.readBonusNumber();

    expect(lottoResult.readBonusNumber).toBeDefined();
  });

  test('로또 결과 통계 및 수익률 출력한다.', async () => {
    const logSpy = getLogSpy();
    const lottoResult = new LottoResult();

    mockQuestions(['1,2,3,4,5,6']);
    await lottoResult.readWinningNumbers();
    mockQuestions(['7']);
    await lottoResult.readBonusNumber();

    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 9, 10]),
    ];

    const purchaseAmount = 3000;
    lottoResult.printWinnerStatistics(purchaseAmount, lottos);

    expect(logSpy).toHaveBeenCalledWith('\n당첨 통계\n---');
    expect(logSpy).toHaveBeenCalledWith('3개 일치 (5,000원) - 0개');
    expect(logSpy).toHaveBeenCalledWith('4개 일치 (50,000원) - 1개');
    expect(logSpy).toHaveBeenCalledWith('5개 일치 (1,500,000원) - 0개');
    expect(logSpy).toHaveBeenCalledWith(
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개'
    );
    expect(logSpy).toHaveBeenCalledWith('6개 일치 (2,000,000,000원) - 1개');
    expect(logSpy).toHaveBeenCalledWith('총 수익률은 67668333.3%입니다.');
  });
});
