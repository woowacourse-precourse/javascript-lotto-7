import { getLottos } from '../src/utils/generateLottos';
import { mockRandoms } from './ApplicationTest.js';

describe('로또 번호 생성 유틸함수 테스트', () => {
  test('구매 금액에 따라 로또 번호들을 반환한다.', () => {
    const paidMoney = 5000;
    const numbers = [
      [3, 4, 6, 18, 31, 34],
      [8, 11, 19, 26, 29, 35],
      [1, 9, 17, 18, 28, 29],
      [18, 20, 22, 33, 41, 43],
      [10, 15, 19, 20, 23, 43],
    ];

    mockRandoms(numbers);

    expect(getLottos(paidMoney)).toEqual(numbers);
  });
});
