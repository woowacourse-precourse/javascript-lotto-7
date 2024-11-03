import Lotto from '../src/Model/Lotto.js';

describe('로또 클래스 테스트', () => {
  describe('validate() 메서드 테스트', () => {
    test('로또 번호가 유효한 경우 로또 번호를 반환한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      expect(Lotto.validate(numbers)).toEqual(numbers);
    });

    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => Lotto.validate([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => Lotto.validate([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
    });

    test('로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => Lotto.validate([1, 2, 3, 4, 5, 46])).toThrow('[ERROR]');
    });
  });

  describe('getSortedNumbers() 메서드 테스트', () => {
    test('로또 번호가 오름차순으로 정렬되어 반환된다.', () => {
      const lotto = new Lotto([3, 2, 1, 6, 5, 4]);
      expect(lotto.getSortedNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
