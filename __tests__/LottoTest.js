import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야합니다.');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
  });

  test('로또 번호가 1~45 범위를 벗어나면 [ERROR] 메시지 출력', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 1~45의 숫자를 입력하셔야 됩니다.');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 1~45의 숫자를 입력하셔야 됩니다.');
  });

  test('로또 번호에 소수가 포함된 경우 [ERROR] 메시지 출력', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 1.5]);
    }).toThrow('[ERROR] 양의 정수만 입력하셔야 됩니다.');
  });

  test('로또 번호에 음수가 포함된 경우 [ERROR] 메시지 출력', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -6]);
    }).toThrow('[ERROR] 양의 정수만 입력하셔야 됩니다.');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
