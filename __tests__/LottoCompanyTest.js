import { MOCK_DATA_1 } from '../src/lib/mock/data';
import { mockQuestions, mockRandoms } from '../src/lib/mock/utils';
import LottoCompany from '../src/LottoCompany';
import LottoShop from '../src/LottoShop';

describe('LottoCompany', () => {
  const lottoCompany = new LottoCompany();

  test('checkWinningLottos', async () => {
    mockQuestions([
      MOCK_DATA_1.INPUT.WINNING_NUMBERS,
      MOCK_DATA_1.INPUT.BONUS_MUMBER,
    ]);
    mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);

    await lottoCompany.draw();
    const lottos = LottoShop.orderLottos(MOCK_DATA_1.INPUT.PURCHASE_PRICE);

    const lottoWinningMap = lottoCompany.checkWinningLottos(lottos);

    lottoWinningMap.forEach((count, rank) => {
      expect(count).toBe(MOCK_DATA_1.RESULT.RANKS[String(rank)]);
    });
  });
});
