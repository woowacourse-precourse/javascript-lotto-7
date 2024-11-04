import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/View';
import { INFO_MESSAGES } from '../src/shared/index.js';

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

    const logs = ['[1, 2, 3]', '[4, 5, 6]'];

    const logSpy = getLogSpy();

    View.displayLottos(lottos);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });

  test('결과를 올바른 메시지 형식으로 출력하는지 테스트', () => {
    const results = new Map([
      [3, 2],
      [4, 1],
      [5, 1],
      [6, 0],
      ['bonus', 1],
    ]);

    const logs = [
      INFO_MESSAGES.PRINT_RESULT,
      '3개 일치 (5,000원) - 2개 ',
      '4개 일치 (50,000원) - 1개 ',
      '5개 일치 (1,500,000원) - 1개 ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개 ',
      '6개 일치 (2,000,000,000원) - 0개 ',
    ];

    const logSpy = getLogSpy();

    View.displayResultMessages(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });

  test('보너스 번호가 없을 때 메시지를 올바르게 출력하는지 테스트', () => {
    const results = new Map([
      [3, 0],
      [4, 0],
      [5, 1],
      [6, 0],
      ['bonus', 0],
    ]);

    const logs = [
      INFO_MESSAGES.PRINT_RESULT,
      '3개 일치 (5,000원) - 0개 ',
      '4개 일치 (50,000원) - 0개 ',
      '5개 일치 (1,500,000원) - 1개 ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개 ',
      '6개 일치 (2,000,000,000원) - 0개 ',
    ];

    const logSpy = getLogSpy();

    View.displayResultMessages(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
