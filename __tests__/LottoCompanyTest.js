import MOCKDATA from '../src/lib/mock/data';
import { mockQuestions, mockRandoms } from '../src/lib/mock/utils';
import LottoCompany from '../src/LottoCompany';
import LottoShop from '../src/LottoShop';

describe('LottoCompany 테스트', () => {
  const lottoCompany = new LottoCompany();
  const lottoShop = new LottoShop();

  test('checkWinningLottos', async () => {
    mockQuestions([
      MOCKDATA.INPUT.WINNING_NUMBERS,
      MOCKDATA.INPUT.BONUS_MUMBER,
    ]);
    mockRandoms(MOCKDATA.RANDOM.LOTTO_NUMBERS);

    await lottoCompany.draw();
    const lottos = lottoShop.orderLottos(MOCKDATA.INPUT.PURCHASE_PRICE);

    const lottoWinningMap = lottoCompany.checkWinningLottos(lottos);

    lottoWinningMap.forEach((count, rank) => {
      expect(count).toBe(MOCKDATA.RESULT.RANKS[String(rank)]);
    });
  });
});
