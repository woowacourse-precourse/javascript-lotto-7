import { MOCK_DATA_1 } from '../lib/mock/data.js';
import { mockQuestions, mockRandoms } from '../lib/mock/utils.js';
import { LottoCompany, LottoShop } from './index.js';

describe('LottoCompany', () => {
  const lottoCompany = new LottoCompany();

  describe('getLottoResult', () => {
    test('로또가 담긴 배열을 넘겨주면, 로또 당첨 결과를 반환한다.', async () => {
      mockQuestions([
        MOCK_DATA_1.INPUT.WINNING_NUMBERS,
        MOCK_DATA_1.INPUT.BONUS_MUMBER,
      ]);
      mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);

      await lottoCompany.draw();
      const lottos = LottoShop.orderLottos(MOCK_DATA_1.INPUT.PURCHASE_PRICE);

      const lottoResult = lottoCompany.getLottoResult(lottos);

      Object.entries(MOCK_DATA_1.RESULT.RANKS).forEach(([rank, count]) => {
        expect(lottoResult.getWinningCount(+rank)).toBe(count);
      });
    });
  });
});
