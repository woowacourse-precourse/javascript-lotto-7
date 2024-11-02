import MOCK_DATA from '../src/lib/mock/data';
import { mockRandoms } from '../src/lib/mock/utils';
import LottoShop from '../src/LottoShop';

describe('LottoCompany', () => {
  test('orderLottos', () => {
    mockRandoms(MOCK_DATA.RANDOM.LOTTO_NUMBERS);
    const lottos = LottoShop.orderLottos(+MOCK_DATA.INPUT.PURCHASE_PRICE);

    lottos.forEach((lotto, index) =>
      expect(lotto.numbers).toEqual(MOCK_DATA.RANDOM.LOTTO_NUMBERS[index]),
    );
  });
});
