import {
  getLogSpy,
  mockQuestions,
  mockRandoms,
} from '../src/lib/mock/utils.js';
import MOCKDATA from '../src/lib/mock/data.js';
import LottoBuyer from '../src/LottoBuyer.js';
import LottoCompany from '../src/LottoCompany.js';
import LottoShop from '../src/LottoShop.js';

describe('LottoBuyer 테스트', () => {
  const lottoBuyer = new LottoBuyer();
  const lottoShop = new LottoShop();
  const lottoCompany = new LottoCompany();

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('purchaseLottos', async () => {
    const logSpy = getLogSpy();

    mockRandoms(MOCKDATA.RANDOM.LOTTO_NUMBERS);
    mockQuestions([MOCKDATA.INPUT.PURCHASE_PRICE]);

    await lottoBuyer.purchaseLottos(lottoShop);

    MOCKDATA.OUTPUT.PURCHASE.forEach((log) => {
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

    MOCKDATA.OUTPUT.WINNING_STATIC.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
