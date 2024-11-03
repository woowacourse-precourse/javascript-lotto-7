import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import ERRORS from '../src/constants/Errors.js';

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

describe('구입 금액 입력 관련 에러 처리', () => {
  test('구입 금액이 비어있는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = [''];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.PURCHASE_AMOUNT_EMPTY),
    );
  });

  test('구입 금액이 숫자가 아닌 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['100j'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.PURCHASE_AMOUNT_NOT_NUMBER),
    );
  });

  test('구입 금액이 0인 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['0'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.PURCHASE_AMOUNT_NEGATIVE),
    );
  });

  test('구입 금액이 음수인 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['-1000'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.PURCHASE_AMOUNT_NEGATIVE),
    );
  });

  test('구입 금액이 1,000원 단위가 아닌 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['10500'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.PURCHASE_AMOUNT_INVALID_UNIT),
    );
  });
});

describe('당첨 번호 및 보너스 번호 입력 관련 에러 처리', () => {
  test('당첨 번호가 비어있는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', ''];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.WINNING_NUMBERS_EMPTY),
    );
  });

  test('당첨 번호가 1~45 범위를 벗어나는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,46', '6'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.WINNING_NUMBERS_NOT_NUMBER),
    );
  });

  test('당첨 번호에 숫자가 아닌 값이 포함된 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,three,4,5,6'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.WINNING_NUMBERS_NOT_NUMBER),
    );
  });

  test('당첨 번호에 중복된 숫자가 포함된 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,2,4,5,6'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.WINNING_NUMBERS_DUPLICATE),
    );
  });

  test('당첨 번호의 개수가 6개가 아닌 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5', '7'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.WINNING_NUMBERS_INVALID_COUNT),
    );
  });

  test('보너스 번호가 비어있는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', ''];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.BONUS_NUMBER_EMPTY),
    );
  });

  test('보너스 번호가 1~45 범위를 벗어나는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '46'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.BONUS_NUMBER_OUT_OF_RANGE),
    );
  });

  test('보너스 번호가 당첨 번호와 중복되는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '6'];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERRORS.BONUS_NUMBER_DUPLICATE),
    );
  });
});
