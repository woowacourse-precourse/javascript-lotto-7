import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 일치하는 번호의 개수를 올바르게 계산한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.countMatchingNumbers([1, 2, 3, 7, 8, 9])).toBe(3);
    expect(lotto.countMatchingNumbers([4, 5, 6, 7, 8, 9])).toBe(3);
    expect(lotto.countMatchingNumbers([7, 8, 9, 10, 11, 12])).toBe(0);
  });

  test('보너스 번호 포함 여부를 올바르게 확인한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.containsBonusNumber(1)).toBe(true);
    expect(lotto.containsBonusNumber(7)).toBe(false);
  });
});
