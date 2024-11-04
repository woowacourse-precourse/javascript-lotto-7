import Lotto from '../src/model/Lotto.js';
import { ERROR_PREFIX } from '../src/Constants.js';

describe('로또 클래스 테스트', () => {
  test.each([
    [
      '로또 번호의 개수가 6개가 아닐 시 예외가 발생한다.',
      [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5],
        [1, 2],
      ],
    ],
    [
      '로또 번호에 중복된 숫자가 있으면 예외가 발생한다.',
      [
        [1, 2, 3, 4, 5, 5],
        [1, 2, 3, 4, 5, 1],
      ],
    ],
    [
      '로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.',
      [
        [1, 2, 3, 4, 'as', 6],
        [1, 2, 3, 4, true, false],
        [1, 2, 3, 4, {}, 6],
      ],
    ],
    [
      '로또 번호에 범위 밖의 숫자가 있으면 예외가 발생한다.',
      [
        [1, 2, 0, 4, 5, 6],
        [1, 2, 3, 48, 5, 6],
        [1, 2, 3, 4, Infinity, 6],
        [1, 2, 3, 4, -Infinity, 6],
      ],
    ],
  ])('%s', (_, testNumbers) => {
    testNumbers.forEach((numbers) => {
      expect(() => new Lotto(numbers)).toThrow(ERROR_PREFIX);
    });
  });
  test('로또 번호를 출력하면 오름차순으로 정렬되어 있어야 한다.', () => {
    const sortedNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto([1, 4, 3, 2, 6, 5]);
    const numbers = lotto.getNumbers();

    numbers.forEach((n, i) => expect(n).toBe(sortedNumbers[i]));
  });
  test('로또 번호를 비교하면 일치하는 번호와 보너스 번호 일치 여부를 출력한다.', () => {
    const lotto = new Lotto([1, 4, 3, 2, 6, 5]);
    const winningNumbers = [1, 2, 3, 8, 9, 10];
    const { matchingNumbers, withBonus } = lotto.compare(winningNumbers, 7);

    expect(matchingNumbers.length).toBe(3);
    expect(withBonus).toBe(false);
  });
});
