import MOCK_DATA from '../src/lib/mock/data';
import { mockQuestions, mockRandoms } from '../src/lib/mock/utils';
import LottoCompany from '../src/LottoCompany';
import LottoShop from '../src/LottoShop';

describe('LottoCompany', () => {
  const lottoCompany = new LottoCompany();

  test('checkWinningLottos', async () => {
    mockQuestions([
      MOCK_DATA.INPUT.WINNING_NUMBERS,
      MOCK_DATA.INPUT.BONUS_MUMBER,
    ]);
    mockRandoms(MOCK_DATA.RANDOM.LOTTO_NUMBERS);

    await lottoCompany.draw();
    const lottos = LottoShop.orderLottos(MOCK_DATA.INPUT.PURCHASE_PRICE);

    const lottoWinningMap = lottoCompany.checkWinningLottos(lottos);

    lottoWinningMap.forEach((count, rank) => {
      expect(count).toBe(MOCK_DATA.RESULT.RANKS[String(rank)]);
    });
  });
});
