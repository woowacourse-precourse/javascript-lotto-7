import outputView from '../../src/views/outputView';
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
});
