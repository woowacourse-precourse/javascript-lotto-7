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

const runException = async (...input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);

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

  test.each([
    {
      description: '구매 금액이 0원일 때 에러를 콘솔에 출력한다.',
      input: ['0'],
    },
    {
      description: '구매 금액이 1000원으로 나누어 떨어지지 않을 때 에러를 콘솔에 출력한다.',
      input: ['500'],
    },
    {
      description: '당첨 번호가 6개가 아닌 경우 에러를 콘솔에 출력한다.',
      input: ['1000', '1,2,3,4,5'],
    },
    {
      description: '당첨 번호가 1~45 사이의 숫자가 아닌 경우 에러를 콘솔에 출력한다.',
      input: ['1000', '1,2,3,4,5,46'],
    },
    {
      description: '당첨 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.',
      input: ['1000', '1,2,3,4,5,;'],
    },
    {
      description: '당첨 번호가 중복되는 경우 에러를 콘솔에 출력한다.',
      input: ['1000', '1,1,2,3,4,5'],
    },
    {
      description: '보너스 볼이 1~45 사이의 숫자가 아닌 경우 에러를 콘솔에 출력한다.',
      input: ['1000', '1,2,3,4,5,6', '46'],
    },
    {
      description: '보너스 볼이 당첨 번호와 중복되는 경우 에러를 콘솔에 출력한다.',
      input: ['1000', '1,2,3,4,5,6', '6'],
    },
  ])('%description', async ({ input}) => {
    await runException(input);
  })
});
