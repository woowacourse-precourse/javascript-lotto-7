import { MOCK_DATA_1 } from '../lib/mock/data.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../lib/mock/utils.js';
import { LottoBuyer, LottoCompany, LottoShop } from './index.js';

describe('LottoBuyer', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('purchaseLottos', () => {
    test('사용자가 구매 금액을 입력하면, 로또를 만들어 결과를 출력한다.', async () => {
      const lottoBuyer = new LottoBuyer();
      const lottoShop = new LottoShop();
      const logSpy = getLogSpy();

      mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);
      mockQuestions([MOCK_DATA_1.INPUT.PURCHASE_PRICE]);

      await lottoBuyer.purchaseLottos(lottoShop);

      MOCK_DATA_1.OUTPUT.PURCHASE.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  describe('checkWinningLotto', () => {
    test('사용자가 로또 회사에 가서 당첨된 로또 결과를 반환한다.', async () => {
      const logSpy = getLogSpy();

      const lottoBuyer = new LottoBuyer();
      const lottoCompany = new LottoCompany();

      mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);
      mockQuestions([
        MOCK_DATA_1.INPUT.PURCHASE_PRICE,
        MOCK_DATA_1.INPUT.WINNING_NUMBERS,
        MOCK_DATA_1.INPUT.BONUS_MUMBER,
      ]);

      await lottoBuyer.purchaseLottos();
      await lottoCompany.draw();

      lottoBuyer.checkWinningLotto(lottoCompany);

      MOCK_DATA_1.OUTPUT.WINNING_STATIC.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
