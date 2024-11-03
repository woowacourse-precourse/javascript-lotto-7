import Lotto from '../src/Lotto';
import { mockRandoms } from './testUtil';

describe('Lotto 클래스의 purchaseLotto 메서드 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('6개의 로또 번호가 오름차순으로 정렬되어 지정된 개수만큼 나온다.', () => {
    mockRandoms([
      [43, 42, 23, 21, 41, 8],
      [38, 16, 11, 5, 32, 3],
    ]);

    const lottoList = Lotto.purchaseLotto(2);
    const expectedList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];

    lottoList.forEach((lotto, idx) => {
      expect(lotto.numbers).toEqual(expectedList[idx]);
    });
  });
});
