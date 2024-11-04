import outputView from '../src/views/outputView.js';
import { Console } from '@woowacourse/mission-utils';

describe('outputView 테스트', () => {
  beforeEach(() => {
    jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('displayEmptyLine가 빈 줄을 출력하는지 테스트', () => {
    outputView.displayEmptyLine();

    expect(Console.print).toHaveBeenCalledWith('');
  });

  test('displayLottoCount가 로또 개수 메시지를 출력하는지 테스트', () => {
    const lottoCount = 5;
    outputView.displayLottoCount(lottoCount);

    expect(Console.print).toHaveBeenCalledWith('');
    expect(Console.print).toHaveBeenCalledWith(
      `${lottoCount}개를 구매했습니다.`
    );
  });

  test('displayLottos가 로또 번호 목록을 출력하는지 테스트', () => {
    const lottos = [
      { numbers: [1, 2, 3, 4, 5, 6] },
      { numbers: [7, 8, 9, 10, 11, 12] },
    ];
    outputView.displayLottos(lottos);

    expect(Console.print).toHaveBeenCalledWith('[1, 2, 3, 4, 5, 6]');
    expect(Console.print).toHaveBeenCalledWith('[7, 8, 9, 10, 11, 12]');
    expect(Console.print).toHaveBeenCalledWith('');
  });

  test('displayLottoResult가 당첨 통계 메시지를 출력하는지 테스트', () => {
    const lottoResult = {
      first: { count: 1 },
      second: { count: 2 },
      third: { count: 3 },
      fourth: { count: 4 },
      fifth: { count: 5 },
    };
    outputView.displayLottoResult(lottoResult);

    expect(Console.print).toHaveBeenCalledWith('');
    expect(Console.print).toHaveBeenCalledWith('당첨 통계\n---');
    expect(Console.print).toHaveBeenCalledWith('3개 일치 (5,000원) - 5개');
    expect(Console.print).toHaveBeenCalledWith('4개 일치 (50,000원) - 4개');
    expect(Console.print).toHaveBeenCalledWith('5개 일치 (1,500,000원) - 3개');
    expect(Console.print).toHaveBeenCalledWith(
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 2개'
    );
    expect(Console.print).toHaveBeenCalledWith(
      '6개 일치 (2,000,000,000원) - 1개'
    );
  });

  test('displayLottoRateOfReturn가 수익률 메시지를 출력하는지 테스트', () => {
    const lottoRateOfReturn = 62.5;
    outputView.displayLottoRateOfReturn(lottoRateOfReturn);

    expect(Console.print).toHaveBeenCalledWith(
      `총 수익률은 ${lottoRateOfReturn}%입니다.`
    );
  });

  test('displayErrorMessage가 에러 메시지를 출력하는지 테스트', () => {
    const errorMessage = '[ERROR]';
    outputView.displayErrorMessage(errorMessage);

    expect(Console.print).toHaveBeenCalledWith(errorMessage);
  });
});
