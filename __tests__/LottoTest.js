import Lotto from '../src/Lotto';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호에 중복된 번호가 있습니다.');
  });

  test('로또 번호가 비어있거나 빈 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, null, 5, 6]);
    }).toThrow('[ERROR] 입력 값이 비어 있거나 입력 값에 빈 값이 포함되어 있습니다.');
    expect(() => {
      new Lotto([null]);
    }).toThrow('[ERROR] 입력 값이 비어 있거나 입력 값에 빈 값이 포함되어 있습니다.');
  });

  test.only('로또 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호는 숫자와 ,로 구분되어야 합니다.');
  });

  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
  });

  test('올바른 로또 번호가 입력되면 예외가 발생하지 않는다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
    expect(() => {
      new Lotto([7, 12, 23, 34, 45, 38]);
    }).not.toThrow();
  });
});
