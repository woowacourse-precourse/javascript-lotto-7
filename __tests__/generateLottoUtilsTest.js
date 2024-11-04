import { getLottos } from '../src/utils/generateLottos';
import { mockRandoms } from '../src/utils/test/testUtils';

describe('로또 번호 생성 유틸함수 테스트', () => {
  test('구매 금액에 따라 로또 번호들을 반환한다.', () => {
    const PAID_MONEY = 5000;
    const NUMBERS = [
      [3, 4, 6, 18, 31, 34],
      [8, 11, 19, 26, 29, 35],
      [1, 9, 17, 18, 28, 29],
      [18, 20, 22, 33, 41, 43],
      [10, 15, 19, 20, 23, 43],
    ];

    mockRandoms(NUMBERS);

    expect(getLottos(PAID_MONEY)).toEqual(NUMBERS);
  });
});
