import Lotto from '../src/Model/Lotto.js';

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

  test('hasInNumbers 메서드는 특정 숫자가 로또 번호에 포함되었는지 확인한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.hasInNumbers(3)).toBe(true);
    expect(lotto.hasInNumbers(7)).toBe(false);
  });

  test('countMatchingNumbers 메서드는 다른 로또와 일치하는 번호의 개수를 반환한다.', () => {
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([4, 5, 6, 7, 8, 9]);

    expect(lotto1.countMatchingNumbers(lotto2)).toBe(3);

    const lotto3 = new Lotto([10, 11, 12, 13, 14, 15]);

    expect(lotto1.countMatchingNumbers(lotto3)).toBe(0);
  });
});
