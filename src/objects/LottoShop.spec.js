import { MOCK_DATA_1 } from '../lib/mock/data.js';
import { mockRandoms } from '../lib/mock/utils.js';
import { LottoShop } from '.';

describe('LottoCompany', () => {
  test('orderLottos', () => {
    mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);
    const lottos = LottoShop.orderLottos(+MOCK_DATA_1.INPUT.PURCHASE_PRICE);

    lottos.forEach((lotto, index) =>
      expect(lotto.numbers).toEqual(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS[index]),
    );
  });
});
