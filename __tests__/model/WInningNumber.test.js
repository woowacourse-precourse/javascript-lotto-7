import WinningNumbers from '../../src/model/WinningNumbers.js';
import BonusNumber from '../../src/model/BonusNumber.js';
import Lotto from '../../src/Lotto.js';
const ERROR_HEADER = '[ERROR]';

describe('WinninNumbers 테스트', () => {
  test('당첨번호의 갯수가 6개가 넘어가면 에러가 발생한다.', () => {
    expect(() => new WinningNumbers([1, 2, 3, 4, 5, 6, 7])).toThrow(ERROR_HEADER);
  });

  test('다른 로또 용지를 평가할 수 있다.', () => {
    const numbers = new WinningNumbers([1, 2, 3, 4, 5, 6]);
    numbers.setBonus(new BonusNumber(10, numbers));
    const target = new Lotto([2, 4, 6, 8, 10, 12]);
    expect(numbers.test(target)).toStrictEqual({ bonusMatch: true, matched: 3 });
  });

});
