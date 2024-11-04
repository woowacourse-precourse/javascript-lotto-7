import { validateWinningNumber } from '../src/validate/winningNumberValidator.js';
import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  let lotto;
  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumber([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 오름차순으로 정렬되어야 한다', () => {
    const unsortedLotto = new Lotto([6, 3, 1, 4, 5, 2]);
    expect(unsortedLotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('당첨 번호와 일치하는 숫자의 개수를 반환해야 한다', () => {
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.match(winningNumbers)).toBe(3);
  });

  test('특정 숫자가 포함되어 있는지 확인할 수 있어야 한다', () => {
    expect(lotto.includes(1)).toBe(true);
    expect(lotto.includes(7)).toBe(false);
  });

  test('로또 번호는 불변성을 유지해야 한다', () => {
    const numbers = lotto.getNumbers();
    numbers[0] = 7;

    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
