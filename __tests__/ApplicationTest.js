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
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async (
  amount = '1000',
  winningNumbers = '1,2,3,4,5,6',
  bonusNumber = '7'
) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([amount, winningNumbers, bonusNumber, ...INPUT_NUMBERS_TO_END]);

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

  test('예외 테스트', async () => {
    await runException('1000j');
  });
});

describe.each([
  ['text', '[ERROR]'],
  ['0', '[ERROR]'],
  ['-1000', '[ERROR]'],
  ['500', '[ERROR]'],
])('구입 금액 입력 테스트', (input, errorMessage) => {
  test(`구입 금액이 ${input}일 때 ${errorMessage}를 출력한다.`, async () => {
    await runException(input);
  });
});

describe.each([
  ['1000', '1.2.3.4.5.6', '[ERROR]'],
  ['1000', '1,2,3,4,5,', '[ERROR]'],
  ['1000', '1,2,3,4,5,a', '[ERROR]'],
  ['1000', '1,2,3,4,5,46', '[ERROR]'],
  ['1000', '0,2,3,4,5,6', '[ERROR]'],
])('당첨 번호 입력 테스트', (amount, winningNumbers, errorMessage) => {
  test(`당첨 번호가 [${winningNumbers}] 일 때 ${errorMessage}를 출력한다.`, async () => {
    await runException(amount, winningNumbers);
  });
});

describe.each([
  ['1000', '1,2,3,4,5,6', 'a', '[ERROR]'],
  ['1000', '1,2,3,4,5,6', '0', '[ERROR]'],
  ['1000', '1,2,3,4,5,6', '46', '[ERROR]'],
  ['1000', '1,2,3,4,5,6', '1', '[ERROR]'],
])(
  '보너스 번호 입력 테스트',
  (amount, winningNumbers, bonusNumber, errorMessage) => {
    test(`보너스 번호가 ${bonusNumber}일 때 ${errorMessage}를 출력한다.`, async () => {
      await runException(amount, winningNumbers, bonusNumber);
    });
  }
);
