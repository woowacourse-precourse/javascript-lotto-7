import { MOCK_DATA_1 } from '../lib/mock/data.js';
import { mockRandoms } from '../lib/mock/utils.js';
import { LottoShop } from './index.js';

describe('LottoShop', () => {
  describe('orderLottos', () => {
    test('구매한 가격만큼 로또 번호를 출력한다.', () => {
      mockRandoms(MOCK_DATA_1.RANDOM.LOTTO_NUMBERS);
      const lottos = LottoShop.orderLottos(
        Number(MOCK_DATA_1.INPUT.PURCHASE_PRICE),
      );

      lottos.forEach((lotto, index) =>
        expect(lotto.numbers).toStrictEqual(
          MOCK_DATA_1.RANDOM.LOTTO_NUMBERS[index],
        ),
      );
    });
  });
});
