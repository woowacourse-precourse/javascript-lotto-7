import { MOCK } from '../src/lib/mock/datas';
import { mockRandoms } from '../src/lib/mock/utils';
import LottoShop from '../src/LottoShop';

describe('LottoCompany 테스트', () => {
  const lottoShop = new LottoShop();

  test('orderLottos', () => {
    mockRandoms(MOCK.RANDOM.LOTTO_NUMBERS);
    const lottos = lottoShop.orderLottos(+MOCK.INPUT.PURCHASE_PRICE);

    lottos.forEach((lotto, index) =>
      expect(lotto.numbers).toEqual(MOCK.RANDOM.LOTTO_NUMBERS[index]),
    );
  });
});
