import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { PRIZE_MESSAGES, MESSAGES } from '../src/constants/index.js';

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

  test('로또 한 장 구매 테스트', async () => {
    // given
    const logSpy = getLogSpy();
    const SINGLE_TICKET = [8, 21, 23, 41, 42, 43];

    mockRandoms([SINGLE_TICKET]);
    mockQuestions(['1000', '1,2,3,4,5,6', '7']);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      MESSAGES.howManyBought(1),
      MESSAGES.wrapNumbers(SINGLE_TICKET),
      MESSAGES.prizeStatistics,
      PRIZE_MESSAGES.howManyMatchAndCount('fifth', 0),
      PRIZE_MESSAGES.howManyMatchAndCount('fourth', 0),
      PRIZE_MESSAGES.howManyMatchAndCount('third', 0),
      PRIZE_MESSAGES.howManyMatchAndCount('second', 0),
      PRIZE_MESSAGES.howManyMatchAndCount('first', 0),
      MESSAGES.earningsRateIs('0.0'),
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 여러 장 구매 테스트', async () => {
    // given
    const logSpy = getLogSpy();
    const MULTIPLE_TICKETS = [
      [1, 2, 3, 4, 5, 6], // 6개 일치
      [1, 2, 3, 4, 5, 7], // 5개 일치 + 보너스 일치
      [1, 2, 3, 4, 7, 8], // 4개 일치
      [1, 2, 3, 7, 8, 9], // 3개 일치
      [1, 2, 7, 8, 9, 10], // 2개 일치
    ];

    mockRandoms(MULTIPLE_TICKETS);
    mockQuestions(['5000', '1,2,3,4,5,6', '7']);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      MESSAGES.howManyBought(5),
      ...MULTIPLE_TICKETS.map((ticket) => MESSAGES.wrapNumbers(ticket)),
      MESSAGES.prizeStatistics,
      PRIZE_MESSAGES.howManyMatchAndCount('fifth', 1),
      PRIZE_MESSAGES.howManyMatchAndCount('fourth', 1),
      PRIZE_MESSAGES.howManyMatchAndCount('third', 0),
      PRIZE_MESSAGES.howManyMatchAndCount('second', 1),
      PRIZE_MESSAGES.howManyMatchAndCount('first', 1),
      MESSAGES.earningsRateIs('40601100.0'),
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
