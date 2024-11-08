import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

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

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트1 [구매금액 문자 입력]', async () => {
    await runException('1000j');
  });

  test('예외 테스트2 [로또번호 문자 입력]', async () => {
    await runException('1000', '1,2,3,4,5,6j');
  });

  test('예외 테스트3 [로또번호 중복]', async () => {
    await runException('1000', '1,2,3,4,5,5');
  });

  test('예외 테스트4 [로또번호 범위 초과]', async () => {
    await runException('1000', '1,2,3,4,5,46');
  });

  test('예외 테스트5 [로또번호 개수 초과]', async () => {
    await runException('1000', '1,2,3,4,5,6,7');
  });

  test('예외 테스트6 [로또번호 개수 미달]', async () => {
    await runException('1000', '1,2,3,4,5');
  });

  test('예외 테스트7 [구매금액 미달]', async () => {
    await runException('500');
  });

  test('예외 테스트8 [구매금액 0]', async () => {
    await runException('0');
  });
  test('예외 테스트9 [구매금액 음수]', async () => {
    await runException('-1000');
  });

  test('예외 테스트10 [로또번호 0]', async () => {
    await runException('1000', '0,1,2,3,4,5');
  });

  test('예외 테스트11 [로또번호 음수]', async () => {
    await runException('1000', '-1,1,2,3,4,5');
  });

  test('예외 테스트 12 [보너스 번호 범위 초과]', async () => {
    await runException('1000', '1,2,3,4,5,45', '46');
  });

  test('예외 테스트 13 [보너스 번호 중복]', async () => {
    await runException('1000', '1,2,3,4,5,45', '45');
  });

  test('예외 테스트 14 [보너스 번호 0]', async () => {
    await runException('1000', '1,2,3,4,5,45', '0');
  });

  test('예외 테스트 15 [보너스 번호 음수]', async () => {
    await runException('1000', '1,2,3,4,5,45', '-1');
  });

  test('예외 테스트 16 [보너스 번호 문자]', async () => {
    await runException('1000', '1,2,3,4,5,45', 'j');
  });
});
