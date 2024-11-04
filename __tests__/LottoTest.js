import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 'a', 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 소수점이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4.5, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1부터 45 사이가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('정상적인 로또 번호 배열일 때 객체가 생성된다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 번호와 당첨 번호를 비교하여 일치하는 숫자 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const [matchCount, hasBonusBall] = lotto.compare([1, 2, 3, 7, 8, 9], 10);
    expect(matchCount).toBe(3);
    expect(hasBonusBall).toBe(false);
  });

  test('보너스 볼이 일치하는 경우를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const [matchCount, hasBonusBall] = lotto.compare([1, 2, 3, 4, 5, 9], 6);
    expect(matchCount).toBe(5);
    expect(hasBonusBall).toBe(true);
  });

  test('보너스 볼이 일치하지 않는 경우를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const [matchCount, hasBonusBall] = lotto.compare([1, 2, 3, 4, 5, 9], 7);
    expect(matchCount).toBe(5);
    expect(hasBonusBall).toBe(false);
  });

  test('당첨 번호와 보너스 볼 모두 일치하지 않는 경우를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const [matchCount, hasBonusBall] = lotto.compare([7, 8, 9, 10, 11, 12], 13);
    expect(matchCount).toBe(0);
    expect(hasBonusBall).toBe(false);
  });

  test('6개의 당첨 번호가 모두 일치할 경우를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const [matchCount, hasBonusBall] = lotto.compare([1, 2, 3, 4, 5, 6], 7);
    expect(matchCount).toBe(6);
    expect(hasBonusBall).toBe(false);
  });

  test('보너스 볼 조건을 만족하지 않는 경우를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const [matchCount, hasBonusBall] = lotto.compare([1, 2, 3, 4, 9, 10], 11);
    expect(matchCount).toBe(4);
    expect(hasBonusBall).toBe(false);
  });
});
