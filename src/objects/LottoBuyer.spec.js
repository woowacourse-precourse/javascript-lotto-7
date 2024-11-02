import { MOCK_DATA_1 } from '../lib/mock/data';
import { getLogSpy, mockQuestions, mockRandoms } from '../lib/mock/utils';
import { LottoBuyer, LottoCompany, LottoShop } from '.';

describe('LottoBuyer', () => {
  const lottoBuyer = new LottoBuyer();
  const lottoShop = new LottoShop();
  const lottoCompany = new LottoCompany();

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('purchaseLottos', async () => {
    const logSpy = getLogSpy();

    mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);
    mockQuestions([MOCK_DATA_1.INPUT.PURCHASE_PRICE]);

    await lottoBuyer.purchaseLottos(lottoShop);

    MOCK_DATA_1.OUTPUT.PURCHASE.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('checkWinningLotto', async () => {
    const logSpy = getLogSpy();

    lottoCompany.checkWinningLottos = jest.fn();
    lottoCompany.checkWinningLottos.mockImplementation(
      () =>
        new Map([
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 1],
        ]),
    );

    lottoBuyer.checkWinningLotto(lottoCompany);

    MOCK_DATA_1.OUTPUT.WINNING_STATIC.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
