import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 7],
      [1, 3, 4, 5, 6, 8],
      [1, 4, 5, 6, 7, 8],
      [1, 5, 6, 7, 8, 9],
      [7, 8, 9, 10, 11, 12],
    ]);
    mockQuestions(['6000', '1,2,3,4,5,6', '7']);

    const app = new App();
    await app.run();

    const logs = [
      '6개를 구매했습니다.',
      '[1, 2, 3, 4, 5, 6]',
      '[1, 3, 4, 5, 6, 7]',
      '[1, 3, 4, 5, 6, 8]',
      '[1, 4, 5, 6, 7, 8]',
      '[1, 5, 6, 7, 8, 9]',
      '[7, 8, 9, 10, 11, 12]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 33859250.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
