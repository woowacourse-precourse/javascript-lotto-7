import BuyLotto from '../src/BuyLotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (amount) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(amount);
  });
};

const mockExceptQuestions = (inputs) => {
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

  const INPUT_NUMBERS_TO_END = '1000';
  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockExceptQuestions([input, INPUT_NUMBERS_TO_END]);
  // when
  const buyLotto = new BuyLotto();
  await buyLotto.buyLotto();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 구매 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 금액 입력 기능 테스트', async () => {
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

    mockQuestions('8000');

    const buyLotto = new BuyLotto();
    await buyLotto.buyLotto();

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
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('로또 구매 클래스 예외 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 금액이 숫자가 아닌 경우 테스트', async () => {
    await runException('1000j');
  });

  test('구매 금액을 1000단위로 입력하지 않은 경우 테스트', async () => {
    await runException('1100');
  });
});
