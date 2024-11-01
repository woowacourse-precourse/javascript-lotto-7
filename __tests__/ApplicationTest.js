import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { ERROR_MSG } from '../src/Constants.js';

export const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

export const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

export const runException = async (input, inputOrder = 0, errorMsg = '[ERROR]') => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  let INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  INPUT_NUMBERS_TO_END.splice(inputOrder, 0, input);

  console.log(INPUT_NUMBERS_TO_END);

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMsg));
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

  // 로또 구입 금액 입력 유효성 검사 TC (우선순위 높은 순으로 정렬)
  test.each([
    // empty Check
    [null, ERROR_MSG.invalidInputData],
    [undefined, ERROR_MSG.invalidInputData],
    ['', ERROR_MSG.invalidInputData],
    [' ', ERROR_MSG.invalidInputData],
    // Number Only Check
    ['abcd', ERROR_MSG.notANumber],
    ['///', ERROR_MSG.notANumber],
    ['\\\\\\', ERROR_MSG.notANumber],
    ['>_<', ERROR_MSG.notANumber],
    ['--1', ERROR_MSG.notANumber],
    // Range Check
    ['0', ERROR_MSG.outOfAmountRange],
    ['1', ERROR_MSG.outOfAmountRange],
    ['123', ERROR_MSG.outOfAmountRange],
    ['1000000000', ERROR_MSG.outOfAmountRange],
    ['100000000001', ERROR_MSG.outOfAmountRange],
    // Price Align Check
    ['1001', ERROR_MSG.priceMisalign],
  ])("[예외 테스트] 로또 구입 금액이 %s 으로 입력되면 '%s' 로 Error를 발생시킨다.", async (input, errorMsg) => {
    await runException(input, 0, errorMsg);
  });

  // 당첨 번호 입력 유효성 검사 TC (우선순위 높은 순으로 정렬)
  test.each([
    // empty Check
    [null, ERROR_MSG.invalidInputData],
    [undefined, ERROR_MSG.invalidInputData],
    ['', ERROR_MSG.invalidInputData],
    ['   ', ERROR_MSG.invalidInputData],
    // Number Only Check
    ['abcd', ERROR_MSG.notANumber],
    ['///', ERROR_MSG.notANumber],
    ['\\\\\\', ERROR_MSG.notANumber],
    ['>_<', ERROR_MSG.notANumber],
    ['--1', ERROR_MSG.notANumber],
    // Count Check
    ['1,2,3,4', ERROR_MSG.invalidNumberCount],
    ['1,2,3,-1', ERROR_MSG.invalidNumberCount],
    // Range Check
    ['0,1,2,3,4,5', ERROR_MSG.outOfLottoRange],
    ['-1,-2,-3,-4,-5,-6', ERROR_MSG.outOfLottoRange],
    ['1,2,3,4,5,46', ERROR_MSG.outOfLottoRange],
    ['1,2,3,4,4,100', ERROR_MSG.outOfLottoRange],
    // Duplicate Check
    ['1,2,3,4,4,5', ERROR_MSG.duplicateNumber],
  ])("[예외 테스트] 당첨 번호가 %s 으로 입력되면 '%s' 로 Error를 발생시킨다.", async (input, errorMsg) => {
    await runException(input, 1, errorMsg);
  });
});
