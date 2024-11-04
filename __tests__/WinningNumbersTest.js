import WinningNumbers from '../src/WinningNumbers.js';

describe('WinningNumbers 클래스 테스트', () => {
  test('당첨 번호가 유효한 로또 번호 조건에 부합한다.', () => {
    const winningNumbers = [1, 12, 30, 43, 7, 25];

    expect(() => new WinningNumbers(winningNumbers)).not.toThrow('[ERROR]');
  });
  test('당첨 번호가 유효한 로또 번호 조건에 부합하지 않으면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(() => new WinningNumbers(winningNumbers)).toThrow('[ERROR]');
  });
  test('보너스 번호가 유효한 로또 번호 조건에 부합한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 30;
    const winningNumbers = new WinningNumbers(numbers);

    expect(() => (winningNumbers.bonusNumber = bonusNumber)).not.toThrow('[ERROR]');
  });
  test('보너스 번호가 유효한 로또 번호 조건에 부합하지 않으면 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 3;
    const winningNumbers = new WinningNumbers(numbers);

    expect(() => (winningNumbers.bonusNumber = bonusNumber)).toThrow('[ERROR]');
  });
});
