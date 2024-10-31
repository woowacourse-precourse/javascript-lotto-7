import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/View';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('View 클래스 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('발행한 로또 수량 및 번호를 오름차순으로 정렬하여 출력 테스트', () => {
    const lottos = [
      [3, 1, 2],
      [6, 4, 5],
    ];

    const logSpy = getLogSpy();

    View.displayLottos(lottos);

    expect(logSpy).toHaveBeenCalledWith([1, 2, 3]);
    expect(logSpy).toHaveBeenCalledWith([4, 5, 6]);
  });
});
