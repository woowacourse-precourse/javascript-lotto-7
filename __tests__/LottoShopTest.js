import LottoShop from '../src/LottoShop.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickUniqueNumbersInRange);
};

describe('LottoShop 테스트', () => {
  test('buyLottos(money) 테스트', () => {
    const expectedLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(expectedLottos);

    const money = 8000;
    const lottos = LottoShop.buyLottos(money);

    lottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(expectedLottos[index]);
    });
  });

  test('getBuyLottosInfo(lottos) 테스트', () => {
    const lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ].map((numbers) => ({ getNumbersWithSquareBrackets: jest.fn().mockReturnValue(`[${numbers.join(', ')}]`) }));

    const expects = '8개를 구매했습니다.\n'
      + '[8, 21, 23, 41, 42, 43]\n'
      + '[3, 5, 11, 16, 32, 38]\n'
      + '[7, 11, 16, 35, 36, 44]\n'
      + '[1, 8, 11, 31, 41, 42]\n'
      + '[13, 14, 16, 38, 42, 45]\n'
      + '[7, 11, 30, 40, 42, 43]\n'
      + '[2, 13, 22, 32, 38, 45]\n'
      + '[1, 3, 5, 14, 22, 45]';

    const result = LottoShop.getBuyLottosInfo(lottos);

    expect(result).toEqual(expects);
  });
});
