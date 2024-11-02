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

  describe('purchaseLottos', () => {
    test('사용자가 구매 금액을 입력하면, 로또를 만들어 결과를 출력한다.', async () => {
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
});
