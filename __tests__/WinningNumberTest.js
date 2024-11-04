import WinningNumber from '../src/models/WinningNumber';

describe('WinningNumber 클래스 테스트', () => {
  test('당첨 번호의 길이가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1, 2, 3, 4, 5, 5');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1, 2, 3, 4, 5, 46');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 유효하면 예외가 발생하지 않는다.', () => {
    expect(() => {
      new WinningNumber('1, 2, 3, 4, 5, 6');
    }).not.toThrow();
  });
  test('보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const win = new WinningNumber('47');
      win.setBonusNumber('46');
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const win = new WinningNumber('1, 2, 3, 4, 5, 6');
      win.setBonusNumber('1');
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const win = new WinningNumber('1, 2, 3, 4, 5, 6');
      win.setBonusNumber('a');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호와 보너스 번호가 유효하면 예외가 발생하지 않는다.', () => {
    expect(() => {
      const win = new WinningNumber('1, 2, 3, 4, 5, 6');
      win.setBonusNumber('7');
    }).not.toThrow();
  });
  test('당첨 번호에 소수가 입력되면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1.1, 2, 3, 4, 5, 6');
    }).toThrow('[ERROR]');
  });
  test('보너스 번호에 소수가 입력되면 예외가 발생한다.', () => {
    expect(() => {
      const win = new WinningNumber('1, 2, 3, 4, 5, 6');
      win.setBonusNumber('7.1');
    }).toThrow('[ERROR]');
  });
});
