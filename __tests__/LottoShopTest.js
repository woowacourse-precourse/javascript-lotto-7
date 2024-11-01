import MOCKDATA from '../src/lib/mock/data';
import { mockRandoms } from '../src/lib/mock/utils';
import LottoShop from '../src/LottoShop';

describe('LottoCompany', () => {
  test('orderLottos', () => {
    mockRandoms(MOCKDATA.RANDOM.LOTTO_NUMBERS);
    const lottos = LottoShop.orderLottos(+MOCKDATA.INPUT.PURCHASE_PRICE);

    lottos.forEach((lotto, index) =>
      expect(lotto.numbers).toEqual(MOCKDATA.RANDOM.LOTTO_NUMBERS[index]),
    );
  });
});
