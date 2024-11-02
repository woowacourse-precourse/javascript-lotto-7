import { MOCK_DATA_1 } from '../src/lib/mock/data';
import { mockRandoms } from '../src/lib/mock/utils';
import LottoShop from '../src/LottoShop';

describe('LottoCompany', () => {
  test('orderLottos', () => {
    mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);
    const lottos = LottoShop.orderLottos(+MOCK_DATA_1.INPUT.PURCHASE_PRICE);

    lottos.forEach((lotto, index) =>
      expect(lotto.numbers).toEqual(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS[index]),
    );
  });
});
