import BonusNumber from '../src/BonusNumber';

describe('보너스 번호 클래스 테스트', () => {
  const winningNumber = ['1', '2', '3', '4', '5', '6'];
  test('보너스 번호에 공백이 있으면 안된다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 양수만 가능하다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '-7');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 1~45의 숫자만 가능하다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '67');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 정수만 가능하다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '1.5');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 당첨번호와 중복되면 안된다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '6');
    }).toThrow('[ERROR]');
  });
});
