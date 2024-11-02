import {
  getLogSpy,
  mockQuestions,
  mockRandoms,
} from '../src/lib/mock/utils.js';
import { MOCK_DATA_1 } from '../src/lib/mock/data.js';
import LottoBuyer from '../src/objects/LottoBuyer.js';
import LottoCompany from '../src/objects/LottoCompany.js';
import LottoShop from '../src/objects/LottoShop.js';

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
