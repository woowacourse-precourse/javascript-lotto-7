import Result from '../src/Result.js';
import { purchaseLotto } from '../src/PurchaseLotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('calcRanking()', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('match correc prize for each lotto', () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6], // 6개 일치
      [2, 3, 4, 5, 6, 7], // 5개 일치, 보너스 볼 일치
      [1, 2, 3, 4, 5, 8], // 5개 일치
      [3, 4, 5, 6, 7, 8], // 4개 일치
      [4, 5, 6, 7, 8, 9], // 3개 일치
      [5, 6, 7, 8, 9, 10], // 2개 일치 (등수에 해당 없음)
    ]);

    const lottoList = purchaseLotto(6);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = new Result();
    result.calcRanking(lottoList, winningNumbers, bonusNumber);

    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    result.printResult();

    console.log(logSpy.mock.calls);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});