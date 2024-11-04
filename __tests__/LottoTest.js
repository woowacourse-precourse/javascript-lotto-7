import Lotto from '../src/model/Lotto';

describe('로또 클래스 테스트', () => {
  test('유효한 당첨 로또 번호를 입력하면 정상적으로 처리된다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test('당첨 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });
  test('당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
  test('당첨 로또 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('당첨 로또 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });
  test('당첨 로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('당첨 로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
