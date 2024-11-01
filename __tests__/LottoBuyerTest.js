import {
  getLogSpy,
  mockQuestions,
  mockRandoms,
} from '../src/lib/mock/utils.js';
import { MOCK } from '../src/lib/mock/datas.js';
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

    mockRandoms(MOCK.RANDOM.LOTTO_NUMBERS);
    mockQuestions([MOCK.INPUT.PURCHASE_PRICE]);

    await lottoBuyer.purchaseLottos(lottoShop);

    MOCK.OUTPUT.PURCHASE.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('checkWinningLotto', async () => {
    const logSpy = getLogSpy();

    lottoCompany.checkWinningLottos = jest.fn();
    lottoCompany.checkWinningLottos.mockImplementation(() => {
      return new Map([
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 1],
      ]);
    });

    lottoBuyer.checkWinningLotto(lottoCompany);

    MOCK.OUTPUT.WINNING_STATIC.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
