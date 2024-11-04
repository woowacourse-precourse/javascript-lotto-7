import Lotto from '../src/controllers/Lotto.js';

describe.skip('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  describe('메서드 테스트', () => {
    test('getNumbers() 메서드는 로또 번호 배열을 반환한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);
      expect(lotto.getNumbers()).toEqual(numbers);
    });

    test('toString() 메서드는 로또 번호를 "[1, 2, 3, 4, 5, 6]" 형식의 문자열로 반환한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);
      expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');
    });
  });
});
