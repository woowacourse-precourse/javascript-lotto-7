import App from '../src/App';
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
  numbers.forEach((number) => {
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(number);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 앱 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('예외 상황 - 잘못된 구매 금액', async () => {
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(['1000j', '1000', '1,2,3,4,5,6', '7']);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('정상 케이스', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);
    mockQuestions(['2000', '1,2,3,4,5,6', '7']);

    const app = new App();
    await app.run();

    const expected = [
      expect.stringContaining('2개를 구매했습니다.'),
      expect.stringContaining('[1, 2, 3, 4, 5, 6]'),
      expect.stringContaining('[7, 8, 9, 10, 11, 12]'),
      expect.stringContaining('당첨 통계'),
      expect.stringContaining('3개 일치 (5,000원)'),
      expect.stringContaining('4개 일치 (50,000원)'),
      expect.stringContaining('5개 일치 (1,500,000원)'),
      expect.stringContaining('5개 일치, 보너스 볼 일치 (30,000,000원)'),
      expect.stringContaining('6개 일치 (2,000,000,000원)'),
      expect.stringContaining('총 수익률은'),
    ];

    expected.forEach((exp) => {
      expect(logSpy).toHaveBeenCalledWith(exp);
    });
  });

  test('기능 테스트', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    const app = new App();
    await app.run();

    const logs = [
      expect.stringContaining('8개를 구매했습니다.'),
      expect.stringContaining('[8, 21, 23, 41, 42, 43]'),
      expect.stringContaining('[3, 5, 11, 16, 32, 38]'),
      expect.stringContaining('[7, 11, 16, 35, 36, 44]'),
      expect.stringContaining('[1, 8, 11, 31, 41, 42]'),
      expect.stringContaining('[13, 14, 16, 38, 42, 45]'),
      expect.stringContaining('[7, 11, 30, 40, 42, 43]'),
      expect.stringContaining('[2, 13, 22, 32, 38, 45]'),
      expect.stringContaining('[1, 3, 5, 14, 22, 45]'),
      expect.stringContaining('3개 일치 (5,000원) - 1개'),
      expect.stringContaining('4개 일치 (50,000원) - 0개'),
      expect.stringContaining('5개 일치 (1,500,000원) - 0개'),
      expect.stringContaining('5개 일치, 보너스 볼 일치 (30,000,000원) - 0개'),
      expect.stringContaining('6개 일치 (2,000,000,000원) - 0개'),
      expect.stringContaining('총 수익률은 62.5%입니다.'),
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
