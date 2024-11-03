import BonusNumber from '../src/BonusNumber.js';

describe('보너스 번호 클래스 테스트', () => {
  test('빈 값을 입력했을 때 예외처리', () => {
    expect(() => new BonusNumber('', [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('숫자가 아닌 문자열이 포함되어 있을 경우 예외처리', () => {
    expect(() => new BonusNumber('abc', [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('숫자의 범위가 1 ~ 45이상 넘어갈 경우 예외처리', () => {
    expect(() => new BonusNumber(46, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
    expect(() => new BonusNumber(0, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('앞에 입력 받은 숫자와 중복 될 경우 예외처리', () => {
    expect(() => new BonusNumber(5, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });
});
