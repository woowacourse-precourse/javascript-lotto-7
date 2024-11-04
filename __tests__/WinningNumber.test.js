import WinningNumber from '../src/WinningNumber.js';

describe('WinningNumber 클래스 테스트', () => {
  test('당첨 번호가 6개가 아닐 경우 예외가 발생한다', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5], 7);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있을 경우 예외가 발생한다', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5, 5], 7);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5, 6], 1);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1-45 범위를 벗어날 경우 예외가 발생한다', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5, 6], 46);
    }).toThrow('[ERROR]');
  });

  test('정상적인 당첨 번호와 보너스 번호가 입력되면 객체가 생성된다', () => {
    const winningNumber = new WinningNumber([1, 2, 3, 4, 5, 6], 7);
    expect(winningNumber.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winningNumber.getBonusNumber()).toBe(7);
  });
});
