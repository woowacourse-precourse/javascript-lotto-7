import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('로또 게임 통합 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('당첨 결과와 수익률이 올바르게 계산되어 출력된다', async () => {
    // given
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    const input = ['8000', '1,2,3,4,5,6', '7'];
    const numbers = [
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
      [1, 2, 3, 4, 5, 8], // 3등
      [1, 2, 3, 4, 7, 8], // 4등
      [1, 2, 3, 7, 8, 9], // 5등
      [1, 2, 7, 8, 9, 10],
      [1, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
    ];

    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.forEach((number) => {
      MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(number);
    });

    MissionUtils.Console.readLineAsync = jest.fn();
    input.forEach((input) => {
      MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);
    });

    // when
    const app = new App();
    await app.run();

    // then
    const expectedLogs = [
      '8개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3, 4, 5, 7]',
      '[1, 2, 3, 4, 5, 8]',
      '[1, 2, 3, 4, 7, 8]',
      '[1, 2, 3, 7, 8, 9]',
      '[1, 2, 7, 8, 9, 10]',
      '[1, 7, 8, 9, 10, 11]',
      '[7, 8, 9, 10, 11, 12]',
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
