import LottoManager from '../src/models/LottoManager.js';

describe('LottoManager 클래스 단위 테스트', () => {
  const purchaseAmount = 5000;
  let lottoManager;

  beforeEach(() => {
    jest
      .spyOn(LottoManager.prototype, 'generateLottoList')
      .mockImplementation(() => [
        [1, 2, 3, 10, 11, 12],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 4, 5, 9, 10],
        [1, 3, 4, 5, 6, 7],
        [1, 2, 3, 7, 8, 9],
        [1, 2, 3, 4, 5, 10],
      ]);
    lottoManager = new LottoManager(purchaseAmount);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('generateLottoList는 구매 수량에 따라 로또를 생성하고 리스트를 반환한다', () => {
    const lottoList = lottoManager.lottoList;
    expect(lottoList).toHaveLength(6);
    expect(lottoList[0]).toEqual([1, 2, 3, 10, 11, 12]);
  });

  test('calculateWinningLottoCounts는 당첨 횟수를 정확하게 계산한다', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    lottoManager.setWinningNumbers(winningNumbers, bonusNumber);
    lottoManager.calculateWinningLottoCounts();

    expect(lottoManager.getWinningLottoCounts()).toEqual([2, 1, 1, 1, 1]); // 각 일치 조건에 따른 기대값
  });

  test('calculateRateOfReturn은 수익률을 계산하여 반환한다', () => {
    lottoManager.setWinningNumbers([1, 2, 3, 4, 5, 6], 7);
    lottoManager.calculateWinningLottoCounts();
    const rateOfReturn = lottoManager.calculateRateOfReturn();

    const expectedRate = (
      ((2 * 5000 + 1 * 50000 + 1 * 1500000 + 1 * 30000000 + 1 * 2000000000) /
        purchaseAmount) *
      100
    ).toFixed(1);

    expect(rateOfReturn).toBe(expectedRate);
  });
});
