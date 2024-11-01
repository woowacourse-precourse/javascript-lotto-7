import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { COMMON_ERRORS, VALIDATION_ERRORS } from '../src/constants/constants.js';

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

const runLottoTest = async (randomsArr, questionsArr, expectedLogs) => {
  // given
  const logSpy = getLogSpy();
  mockRandoms(randomsArr);
  mockQuestions(questionsArr);

  // when
  const app = new App();
  await app.run();

  // then
  expectedLogs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
}

const runException = async (input, errorMessage) => {
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
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기능 테스트: 기본 예제', async () => {
    await runLottoTest(
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      ['8000', '1,2,3,4,5,6', '7'],
      [
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
      ]
    );
  });

  test('기능 테스트: 5개 + 보너스 볼 일치하는 경우', async () => {
    await runLottoTest(
      [
        [8, 21, 23, 41, 42, 43],
      ],
      ['1000', '23,8,43,42,20,41', '21'],
      [
        '1개를 구매했습니다.',
        '[8, 21, 23, 41, 42, 43]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 3,000,000.0%입니다.',
      ]
    );
  });

  test('기능 테스트: 하나도 일치하지 않는 경우', async () => {
    await runLottoTest(
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
      ],
      ['4000', '2,4,6,7,9,10', '12'],
      [
        '4개를 구매했습니다.',
        '[8, 21, 23, 41, 42, 43]',
        '[3, 5, 11, 16, 32, 38]',
        '[7, 11, 16, 35, 36, 44]',
        '[1, 8, 11, 31, 41, 42]',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 0.0%입니다.',
      ]
    );
  });

  test('예외 테스트: 숫자가 아닌 경우 에러 출력 후 다시 입력 받는다.', async () => {
    await runException('1000j', COMMON_ERRORS.NUMBER);
  });

  test('예외 테스트: 정수가 아닌 경우 에러 출력 후 다시 입력 받는다.', async () => {
    await runException('1000.1', COMMON_ERRORS.INTEGER);
  });

  test('예외 테스트: 1,000원 단위가 아닌 경우 에러 출력 후 다시 입력 받는다.', async () => {
    await runException('1001', VALIDATION_ERRORS.PURCHASE_PRICE.THOUSAND);
  });
});
