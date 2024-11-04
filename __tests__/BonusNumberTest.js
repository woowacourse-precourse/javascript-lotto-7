import BonusNumber from '../src/model/BonusNumber.js';

describe('보너스 번호 클래스 테스트', () => {
  test('유효한 보너스 번호를 입력하면 정상적으로 처리된다.', () => {
    const bonusNumber = new BonusNumber(7, [1, 2, 3, 4, 5, 6]);
    expect(bonusNumber).toBeInstanceOf(BonusNumber);
  });

  test('보너스 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber('a', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('보너스 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(1.5, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('당첨 번호와 중복된 보너스 번호를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
