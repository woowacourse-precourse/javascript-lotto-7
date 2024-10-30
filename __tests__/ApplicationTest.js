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
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구입 금액이 비어있는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 구입 금액을 입력해야 합니다.'),
    );
  });

  test('구입 금액이 숫자가 아닌 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['one thousand']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 구입 금액은 숫자여야 합니다.'),
    );
  });

  test('구입 금액이 0 또는 음수인 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['0']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다.',
      ),
    );

    mockQuestions(['-1000']);
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다.',
      ),
    );
  });

  test('구입 금액이 1,000원 단위가 아닌 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['10500']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 구입 금액은 1,000원 단위여야 합니다.'),
    );
  });
});

describe('당첨 번호 및 보너스 번호 입력 관련 에러 처리', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('당첨 번호가 비어있는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 당첨 번호를 입력해야 합니다.'),
    );
  });

  test('당첨 번호에 숫자가 아닌 값이 포함된 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '1,2,three,4,5,6']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.',
      ),
    );
  });

  test('당첨 번호에 중복된 숫자가 포함된 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '1,2,3,3,4,5']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 당첨 번호에 중복된 숫자가 포함되어 있습니다.',
      ),
    );
  });

  test('당첨 번호의 개수가 6개가 아닌 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '1,2,3,4,5']); // 5개
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 당첨 번호는 6개여야 합니다.'),
    );

    mockQuestions(['8000', '1,2,3,4,5,6,7']); // 7개
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 당첨 번호는 6개여야 합니다.'),
    );
  });

  test('보너스 번호가 비어있는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '1,2,3,4,5,6', '']);
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 보너스 번호를 입력해야 합니다.'),
    );
  });

  test('보너스 번호가 1~45 범위를 벗어나는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '1,2,3,4,5,6', '0']); // 0은 범위 밖
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.',
      ),
    );

    mockQuestions(['8000', '1,2,3,4,5,6', '46']); // 46도 범위 밖
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.',
      ),
    );
  });

  test('보너스 번호가 당첨 번호와 중복되는 경우 에러가 발생한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000', '1,2,3,4,5,6', '3']); // 중복된 번호
    const app = new App();
    await app.run();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
      ),
    );
  });
});
