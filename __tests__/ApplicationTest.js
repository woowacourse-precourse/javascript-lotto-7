import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

const runException = async input => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions(input);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트', async () => {
    // given
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

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    await runException(['1000j', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 구매 금액이 숫자가 아닐 경우', async () => {
    await runException(['abc', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 구매 금액이 음수일 경우', async () => {
    await runException(['-1000', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 구매 금액이 1000으로 나누어 떨어지지 않는 경우 1', async () => {
    await runException(['12345', '1,2,3,4,5,6', '7']);
  });

  test('예외 테스트 구매 금액이 1000으로 나누어 떨어지지 않는 경우 2', async () => {
    await runException(['800', '1,2,3,4,5,6', '7']);
  });

  test('보너스번호가 숫자가 아닌 경우 1', async () => {
    await runException(['1000', '1,2,3,4,5,6', 'a']);
  });

  test('보너스번호가 숫자가 아닌 경우 2', async () => {
    await runException(['1000', '1,2,3,4,5,6', '1 23']);
  });

  test('보너스번호가 1~45범위를 벗어난 경우', async () => {
    await runException(['1000', '1,2,3,4,5,6', '47']);
  });

  test('보너스번호가 음수인 경우', async () => {
    await runException(['1000', '1,2,3,4,5,6', '-1']);
  });

  test('보너스번호가 당첨번호와 중복된 경우', async () => {
    await runException(['1000', '1,2,3,4,5,6', '6']);
  });

  test('기능 테스트 정상적으로 작동하는 경우 2', async () => {
    // given
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
    mockQuestions(['1000', '4,7,22,3,44,5', '11']);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      '1개를 구매했습니다.',
      '[1, 2, 3, 22, 44, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 50.0%입니다.',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
