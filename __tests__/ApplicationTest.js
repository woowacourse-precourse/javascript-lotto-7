import App from '../src/App.js';
import Lotto from '../src/Lotto.js';
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

describe('금액 입력 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.restoreAllMocks();
  });

  test('숫자가 아닌 값을 입력했을 때 에러 메시지 출력', async () => {
    mockQuestions(['hello', '3000']);
    const logSpy = getLogSpy();

    await app.validateMoney();

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 숫자가 아닌 값을 입력할 수 없습니다!');
  });

  test('1000의 배수가 아닌 값을 입력했을 때 에러 메시지 출력', async () => {
    mockQuestions(['1500', '3000']);
    const logSpy = getLogSpy();

    await app.validateMoney();

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 1000 보다 적은 단위는 입력할 수 없습니다!');
  });

  test('음수를 입력했을 때 에러 메시지 출력', async () => {
    mockQuestions(['-1000', '3000']);
    const logSpy = getLogSpy();

    await app.validateMoney();

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 음수는 입력할 수 없습니다!');
  });

  test('유효한 금액을 입력했을 때 해당 값이 반환', async () => {
    mockQuestions(['3000']);
    const result = await app.validateMoney();

    expect(result).toBe('3000');
  });
});

describe('당첨번호 입력 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.restoreAllMocks();
  });

  test('숫자가 아닌 값을 입력했을 때 에러 메시지 출력', async () => {
    mockQuestions(['1,2,3,a,5,6', '1,2,3,4,5,6']);
    const logSpy = getLogSpy();

    const result = await app.validateWinningNumbers();

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 당첨번호는 숫자여야 합니다!');
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('중복된 숫자를 입력했을 때 에러 메시지 출력', async () => {
    mockQuestions(['1,2,3,3,5,6', '7,8,9,10,11,12']);
    const logSpy = getLogSpy();

    const result = await app.validateWinningNumbers();

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 당첨번호는 중복될 수 없습니다!');
    expect(result).toEqual([7, 8, 9, 10, 11, 12]);
  });

  test('당첨 번호 길이 위반', async () => {
    mockQuestions(['1,2,3,4,5,6,7', '1,2,3,4,5,6'])
    const logSpy = getLogSpy();

    const result = await app.validateWinningNumbers();

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 당첨번호는 6개의 숫자여야 합니다!');
    expect(result).toEqual([1,2,3,4,5,6]);
  });

  test('유효한 당첨번호를 입력하면 해당 번호를 반환', async () => {
    mockQuestions(['1,2,3,4,5,6']);

    const result = await app.validateWinningNumbers();

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('보너스 번호 입력 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.restoreAllMocks();
  });

  test('숫자가 아닌 값을 입력했을 때 에러 메시지 출력', async () => {
    mockQuestions(['hello', '7']);
    const logSpy = getLogSpy();

    const result = await app.validateBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 보너스 번호는 숫자여야 합니다!');
    expect(result).toBe(7);
  });

  test('1~45 범위를 벗어나는 보너스 번호 입력 시 에러 메시지 출력', async () => {
    mockQuestions(['50', '8']);
    const logSpy = getLogSpy();

    const result = await app.validateBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다!');
    expect(result).toBe(8);
  });

  test('당첨 번호와 중복된 보너스 번호 입력 시 에러 메시지 출력', async () => {
    mockQuestions(['3', '9']);
    const logSpy = getLogSpy();

    const result = await app.validateBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(logSpy).toHaveBeenCalledWith('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다!');
    expect(result).toBe(9);
  });

  test('유효한 보너스 번호 입력 시 해당 번호 반환', async () => {
    mockQuestions(['7']);
    const result = await app.validateBonusNumber([1, 2, 3, 4, 5, 6]);

    expect(result).toBe(7);
  });
});

describe('로또 생성 테스트', () => {
  test('금액에 따른 로또 반복 생성', () => {
    const app = new App();
    const lottos = app.generateLottos(5000);

    expect(lottos.length).toBe(5);

    lottos.forEach(lotto => { // Lotto 객체 확인
      expect(lotto).toBeInstanceOf(Lotto);
    });
  })
})

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
