import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
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

  test('로또 번호는 1~45 사이의 숫자여야 한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 50, 5]);
    }).toThrow('[ERROR]');
  });

  test('올바른 로또 번호 배열이 주어지면 객체가 정상적으로 생성되어야 한다', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });

  test('getNumbers 메서드는 로또 번호 배열의 복사본을 반환해야 한다', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    const retrievedNumbers = lotto.getNumbers();

    expect(retrievedNumbers).toEqual(numbers);
    expect(retrievedNumbers).not.toBe(numbers);
  });
});
