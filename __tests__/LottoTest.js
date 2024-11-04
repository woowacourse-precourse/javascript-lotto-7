import Lotto from '../src/components/Lotto/Lotto';
import LOTTONUMBERS from '../src/resources/ERROR/LOTTONUMBERS';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTONUMBERS.NOT_TOTALLY_PICKED);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(LOTTONUMBERS.NOT_TOTALLY_PICKED);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(LOTTONUMBERS.DUPLICATED_NUMBER);
  });

  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(LOTTONUMBERS.OVER_NUMBER_RANGE);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(LOTTONUMBERS.OVER_NUMBER_RANGE);
  });

  test('올바른 로또 번호 배열을 생성할 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
