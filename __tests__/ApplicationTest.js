import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { getLottoBuyCount } from '../src/functions/LottoMake.js';
import {
  getIsBonusNumber,
  getLottoPrizeCount,
  splitByComma,
} from '../src/functions/LottoPrize.js';
import Lotto from '../src/Lotto.js';
import { checkInputSymbolOtherThanComma } from '../src/functions/Exceptions.js';

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

describe('로또 구매 테스트', () => {
  test('getLottoButCount() : 로또 개수를 1000원 기준으로 잘 구하는가?', () => {
    expect(getLottoBuyCount(8000)).toBe(8);
  });
});

describe('로또 당첨 테스트', () => {
  test('splitByComma() : 문자열이 콤마(,)를 기준으로 숫자 배열로 나눠지는가?', () => {
    const stringInput = '1,2,3,4,5';
    expect(splitByComma(stringInput)).toEqual([1, 2, 3, 4, 5]);
  });

  test('getLottoPrizeCount() : 해당 로또의 번호 일치 개수가 알맞게 나오는가?', () => {
    const lotto = new Lotto(splitByComma('1,2,3,4,5,6'));
    const lottoPrizeNumbers = [1, 2, 3, 4, 6, 7];

    expect(getLottoPrizeCount(lotto, lottoPrizeNumbers)).toBe(5);
  });

  test('getIsBonusNumber() : 로또 당첨수가 5 라면, 보너스 번호가 일치하는지 확인이 잘 되는가?', () => {
    const lotto = new Lotto(splitByComma('1,2,3,4,5,6'));
    const lottoPrizeCount = 5;
    const lottoBonusNumber = 5;

    expect(getIsBonusNumber(lotto, lottoBonusNumber, lottoPrizeCount));
  });
});
