import Lotto from '../src/components/Lotto.js';
import ERROR_MESSAGE from '../src/constants/ErrorMessage.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6, 6]);
      lotto.getNumbers();
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 5]);
      lotto.getNumbers();
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
  });

  test('발행한 로또 번호의 숫자가 1 ~ 45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 46]);
      lotto.getNumbers();
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
  });

  test('발행한 로또 번호가 오름차순으로 졍렬되어 반환된다.', () => {
    const lotto = new Lotto([4, 3, 2, 1, 6, 5]);
    expect(lotto.getNumbers()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
