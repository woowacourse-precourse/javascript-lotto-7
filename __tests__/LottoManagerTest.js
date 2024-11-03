import LottoManager from '../src/models/LottoManager.js';

jest.mock('../src/models/Lotto.js', () => {
  return jest.fn().mockImplementation(() => {
    return { getLotto: jest.fn(() => [1, 2, 3, 4, 5, 6]) };
  });
});

describe('LottoManager 클래스 단위 테스트', () => {
  const purchaseAmount = 5000;
  let lottoManager;

  beforeEach(() => {
    lottoManager = new LottoManager(purchaseAmount);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('generateLottoList는 구매 수량에 따라 로또를 생성하고 리스트를 반환한다', () => {
    const lottoList = lottoManager.generateLottoList();
    expect(lottoList).toHaveLength(purchaseAmount / 1000);
    expect(lottoList[0]).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('setWinningNumbers는 당첨 번호와 보너스 번호를 설정한다', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottoManager.setWinningNumbers(winningNumbers, bonusNumber);

    expect(lottoManager.winningNumbers).toEqual(winningNumbers);
    expect(lottoManager.bonusNumber).toBe(bonusNumber);
  });

  test('getWinningLottoCounts는 당첨 횟수를 정확하게 계산한다', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    lottoManager.setWinningNumbers(winningNumbers, bonusNumber);

    const lotto1 = { getLotto: jest.fn(() => [1, 2, 3, 10, 11, 12]) };

    const lotto2 = { getLotto: jest.fn(() => [1, 2, 3, 4, 5, 6]) };

    lottoManager.lottoList = [lotto1.getLotto(), lotto2.getLotto()];

    lottoManager.getWinningLottoCounts();

    expect(lottoManager.winningLottoCounts).toEqual([1, 0, 0, 0, 1]);
  });

  test('calculateRateOfReturn은 수익률을 계산하여 반환한다', () => {
    lottoManager.winningLottoCounts = [1, 0, 0, 0, 1];
    const rateOfReturn = lottoManager.calculateRateOfReturn();

    const expectedRate = (
      ((1 * 5000 + 1 * 2000000000) / purchaseAmount) *
      100
    ).toFixed(1);

    expect(rateOfReturn).toBe(expectedRate);
  });
});
