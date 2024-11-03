import WinningLotto from '../src/Model/WinningLotto.js';
import { ERROR_MSG } from '../src/constants/constants.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MSG.invalidNumberCount);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MSG.duplicateNumber);
  });

  test('로또 번호가 입력 가능한 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 50]);
    }).toThrow(ERROR_MSG.outOfLottoRange);
  });

  test('보너스번호가 로또 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonusNumber([6]);
    }).toThrow(ERROR_MSG.duplicateNumber);
  });

  test('멤버 값으로 설정 된 보너스 번호를 출력한다', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonusNumber([7]);

    expect(winningLotto.getbonusNumber()).toEqual([7]);
  });
});
