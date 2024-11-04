import Lotto from '../src/Lotto';

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

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 오름차순으로 정렬된다.', () => {
    const lotto = new Lotto([6, 3, 5, 1, 2, 4]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('일치하는 번호 개수를 정확히 계산한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.countMatchingNumbers([1, 2, 3, 7, 8, 9])).toBe(3);
  });

  test('특정 번호의 포함 여부를 정확히 확인한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.includes(1)).toBe(true);
    expect(lotto.includes(7)).toBe(false);
  });
});
