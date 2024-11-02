import { MOCK_DATA_1 } from '../lib/mock/data.js';
import { mockQuestions, mockRandoms } from '../lib/mock/utils.js';
import { LottoCompany, LottoShop } from './index.js';

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
