import { MOCK } from '../src/lib/mock/datas';
import { mockQuestions, mockRandoms } from '../src/lib/mock/utils';
import LottoCompany from '../src/LottoCompany';
import LottoShop from '../src/LottoShop';

describe('LottoCompany 테스트', () => {
  const lottoCompany = new LottoCompany();
  const lottoShop = new LottoShop();

  test('checkWinningLottos', async () => {
    mockQuestions([MOCK.INPUT.WINNING_NUMBERS, MOCK.INPUT.BONUS_MUMBER]);
    mockRandoms(MOCK.RANDOM.LOTTO_NUMBERS);

    await lottoCompany.draw();
    const lottos = lottoShop.orderLottos(MOCK.INPUT.PURCHASE_PRICE);

    const lottoWinningMap = lottoCompany.checkWinningLottos(lottos);

    lottoWinningMap.forEach((count, rank) => {
      expect(count).toBe(MOCK.RESULT.RANKS[String(rank)]);
    });
  });
});
