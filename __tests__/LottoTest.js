import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복될 수 없습니다.');
  });

  test('로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('로또 번호가 올바르게 생성되면 유효성 검사를 통과한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
