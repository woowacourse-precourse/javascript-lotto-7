import { purchaseLotto, printPurchasedLotto } from '../src/PurchaseLotto.js';
import Lotto from '../src/Lotto.js';
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

const purchaseCount = 5;

describe('purchaseLotto()', () => {
  const lottoList = purchaseLotto(purchaseCount);
  test('generate the specified number of Lotto instances', () => {
      expect(lottoList.length).toBe(purchaseCount);
    lottoList.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});

describe('printPurchasedLotto()', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('print each lotto numbers in the correct format', () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ]);

    const lottoList = purchaseLotto(purchaseCount);

    const logs = [
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
    ];
    
    printPurchasedLotto(lottoList);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});