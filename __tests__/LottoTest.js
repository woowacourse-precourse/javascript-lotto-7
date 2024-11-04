import Lotto from '../src/models/Lotto.js';
import { LOTTO_ERROR } from '../src/constants/error.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTO_ERROR.lottoLengthError);
  });

  test('로또 번호의 개수가 6개가 안되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3]);
    }).toThrow(LOTTO_ERROR.lottoLengthError);
  });

  test('로또 번호의 개수가 정확히 6개일 때는 정상적으로 생성된다.', () => {
    const LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LOTTO.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
