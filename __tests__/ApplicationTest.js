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

const runException = async (invalidInput, inputType = 'money') => {
  // given
  const logSpy = getLogSpy();
  const VALID_MONEY = '1000';
  const VALID_NUMBERS = '1,2,3,4,5,6';
  const VALID_BONUS = '7';
  const RANDOM_NUMBERS = [1, 2, 3, 4, 5, 6];

  let inputs;
  switch (inputType) {
    case 'money':
      inputs = [invalidInput, VALID_MONEY, VALID_NUMBERS, VALID_BONUS];
      break;
    case 'numbers':
      inputs = [VALID_MONEY, invalidInput, VALID_NUMBERS, VALID_BONUS];
      break;
    case 'bonus':
      inputs = [VALID_MONEY, VALID_NUMBERS, invalidInput, VALID_BONUS];
      break;
  }

  mockRandoms([RANDOM_NUMBERS]);
  mockQuestions(inputs);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('총 수익률은'));
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

describe('예외 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('구입 금액 예외', () => {
    test.each([
      ['1500', '1000원 단위가 아닌 경우'],
      ['a', '숫자가 아닌 경우'],
      ['0', '0원인 경우'],
      ['1234567890123456', '범위를 벗어난 경우'],
    ])('%s - %s', async (input) => {
      await runException(input, 'money');
    });
  });

  describe('당첨 번호 입력 예외', () => {
    test.each([
      ['1,2,3,4,5', '숫자가 부족한 경우'],
      ['1,2,3,4,5,6,7', '숫자가 초과된 경우'],
      ['1,2,3,4,5,5', '중복된 숫자가 있는 경우'],
      ['1,2,3,4,5,46', '범위를 벗어난 경우'],
      ['1,2,3,4,a,6', '숫자가 아닌 경우'],
      ['1,2,3,4,5,0', '0이 포함된 경우'],
      ['1,2,3,4,5,', '빈 값이 있는 경우'],
    ])('%s - %s', async (input) => {
      await runException(input, 'numbers');
    });
  });

  describe('보너스 번호 입력 예외', () => {
    test.each([
      ['1', '당첨 번호와 중복되는 경우'],
      ['46', '범위를 벗어난 경우'],
      ['0', '0인 경우'],
      ['abc', '숫자가 아닌 경우'],
      ['', '빈 값인 경우'],
    ])('%s - %s', async (input) => {
      await runException(input, 'bonus');
    });
  });
});
