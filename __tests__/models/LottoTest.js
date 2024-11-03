import Lotto from '../../src/model/Lotto';

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

  test('로또 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 6개일 때, 중복이나 범위 오류가 없으면 정상적으로 생성된다.', () => {
    const lotto = new Lotto([8, 21, 23, 41, 42, 43]);
    expect(lotto.getNumber()).toEqual([8, 21, 23, 41, 42, 43]);
  });

  test('로또 번호가 자동으로 오름차순 정렬되어 저장된다.', () => {
    const lotto = new Lotto([42, 23, 8, 43, 21, 41]);
    expect(lotto.getNumber()).toEqual([8, 21, 23, 41, 42, 43]);
  });
});
