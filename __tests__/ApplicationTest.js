import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import {
  BONUS_NUMBER_ERROR,
  LOTTO_NUMBER_ERROR,
  NOT_INVALID_INPUT,
  PURCHASE_AMOUNT_ERROR,
} from '../src/constants/errorMessage.js';

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
  amount = null,
  winningNumbers = null,
  bonusNumber = null
) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  if (bonusNumber) {
    mockQuestions([
      amount,
      winningNumbers,
      bonusNumber,
      ...INPUT_NUMBERS_TO_END,
    ]);
  }
  if (winningNumbers) {
    mockQuestions([amount, winningNumbers, ...INPUT_NUMBERS_TO_END]);
  }
  if (amount) {
    mockQuestions([amount, ...INPUT_NUMBERS_TO_END]);
  }

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
  ['text', PURCHASE_AMOUNT_ERROR.NOT_NUMBER],
  ['0', PURCHASE_AMOUNT_ERROR.NOT_POSITIVE],
  ['-1000', PURCHASE_AMOUNT_ERROR.NOT_POSITIVE],
  ['500', PURCHASE_AMOUNT_ERROR.NOT_DIVIDE_ONE_THOUSAND],
])('구입 금액 입력 테스트', (input, errorMessage) => {
  test(`구입 금액이 ${input}일 때 "${errorMessage}"를 출력한다.`, async () => {
    await runException(input);
  });
});

describe.each([
  ['1.2.3.4.5.6', NOT_INVALID_INPUT],
  ['1,2,3,4,5,', LOTTO_NUMBER_ERROR.NOT_NUMBER],
  ['1,2,3,4,5,a', LOTTO_NUMBER_ERROR.NOT_NUMBER],
  ['1,2,3,4,5,46', LOTTO_NUMBER_ERROR.NOT_RANGE],
  ['0,2,3,4,5,6', LOTTO_NUMBER_ERROR.NOT_RANGE],
])('당첨 번호 입력 테스트', (winningNumbers, errorMessage) => {
  test(`당첨 번호가 [${winningNumbers}] 일 때 "${errorMessage}"를 출력한다.`, async () => {
    await runException('1000', winningNumbers);
  });
});

describe.each([
  ['a', BONUS_NUMBER_ERROR.NOT_NUMBER],
  ['0', BONUS_NUMBER_ERROR.NOT_RANGE],
  ['46', BONUS_NUMBER_ERROR.NOT_RANGE],
  ['1', BONUS_NUMBER_ERROR.NOT_DUPLICATED],
])('보너스 번호 입력 테스트', (bonusNumber, errorMessage) => {
  test(`보너스 번호가 ${bonusNumber}일 때 "${errorMessage}"를 출력한다.`, async () => {
    await runException('1000', '1,2,3,4,5,6', bonusNumber);
  });
});
