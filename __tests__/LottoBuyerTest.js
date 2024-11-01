import { NORMAL_CASE_OUTPUT } from '../src/lib/test/normalCases.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../src/lib/testUtils.js';
import LottoBuyer from '../src/LottoBuyer.js';
import LottoCompany from '../src/LottoCompany.js';
import LottoShop from '../src/LottoShop.js';

describe('LottoBuyer 테스트', () => {
  const lottoBuyer = new LottoBuyer();
  const lottoShop = new LottoShop();
  const lottoCompany = new LottoCompany();

  test('purchaseLottos', async () => {
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
    mockQuestions(['8000']);

    await lottoBuyer.purchaseLottos(lottoShop);

    const logArray = NORMAL_CASE_OUTPUT.PURCHASE;

    logArray.forEach((log) => {
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

    const logArray = NORMAL_CASE_OUTPUT.WINNING_STATIC;

    lottoBuyer.checkWinningLotto(lottoCompany);

    logArray.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
