import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Lotto from '../src/Lotto.js';
import LottoResult from '../src/models/LottoResult.js';
import WINNING_PRICE from '../src/constants/winningPrice.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
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

  test('보너스 번호 당첨 테스트', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);

    mockQuestions(['3000', '8,21,23,41,42,45', '43']);
    const app = new App();
    await app.run();

    const expectedLogs = [
      '3개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 1000000.0%입니다.',
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('수익률이 올바르게 계산 된다.', async () => {
    // 입력을 설정
    const purchaseAmount = 8000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoTickets = [
      [1, 2, 3, 4, 5, 8], // 5개 일치 (MATCH_5)
      [1, 2, 3, 4, 5, 6], // 6개 일치 (MATCH_6)
      [1, 2, 3, 4, 10, 11], // 4개 일치 (MATCH_4)
      [1, 2, 3, 15, 16, 17], // 3개 일치 (MATCH_3)
    ];

    // 로또 결과 계산
    const lottoResult = new LottoResult(
      winningNumbers,
      bonusNumber,
      lottoTickets,
    );
    const expectedWinnings =
      1 * WINNING_PRICE.MATCH_5 +
      1 * WINNING_PRICE.MATCH_6 +
      1 * WINNING_PRICE.MATCH_4 +
      1 * WINNING_PRICE.MATCH_3;

    const expectedRateOfReturn = (
      (expectedWinnings / purchaseAmount) *
      100
    ).toFixed(1);

    // when
    expect(lottoResult.calculateRateOfReturn(purchaseAmount)).toBe(
      expectedRateOfReturn,
    );
  });

  test('올바른 로또 번호로 생성할 수 있다', () => {
    const lotto = new Lotto([8, 21, 23, 41, 42, 43]);
    expect(lotto.getNumbers()).toEqual([8, 21, 23, 41, 42, 43]);
  });
});
