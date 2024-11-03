import WinningLotto from '../src/Models/WinningLotto.js';

describe('당첨 번호 클래스 테스트', () => {
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
  expect(() => {
      new WinningLotto('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto('1,2,3,4,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 빈 값이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto('1,2,   ,3,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto('1,2,3,4,5f,  6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto('1,2,3.45,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1~45 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto('1,2,3,4,56,7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 반환 되는지 확인', () => {
    const winningLotto = new WinningLotto('1, 5, 4, 2, 3, 6');
    const winningNumbers = winningLotto.numbers;
    expect(winningNumbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
