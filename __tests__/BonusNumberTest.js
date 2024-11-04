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

  test.each([
    [
      [
        [1, 2, 3, 11, 12, 13],
        [1, 3, 11, 17, 7, 8],
        [1, 3, 5, 6, 18, 33],
        [1, 2, 3, 4, 5, 37],
        [35, 42, 1, 5, 6, 2],
        [1, 2, 3, 4, 5, 7],
      ],
      [1, 2, 1, 1, 0],
    ],
  ])('보너스 번호 클래스에서 당첨을 확인하는 테스트', (myLotto, expected) => {
    const bonusNumber = new BonusNumber(winningNumber, 7);
    expect(bonusNumber.checkWinning(myLotto)).toEqual(expected);
  });
});
