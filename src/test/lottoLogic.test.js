import Lotto from '../Lotto/Lotto.js';
import Validator from '../utils/Validator.js';
import ERROR_MESSAGES from '../consts/ErrorMessage.js';

describe('로또 클래스 테스트', () => {
  let lotto;

  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test('문제 없는 케이스', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test('', () => {
    Validator.validateLotto = jest.fn(() => {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE);
    });
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE,
    );
  });

  test('비교 함수 테스트', () => {
    expect(lotto.compareWinningNumbersCount([1, 2, 3, 10, 11, 12])).toBe(3);
    expect(lotto.compareWinningNumbersCount([1, 2, 3, 4, 5, 6])).toBe(6);
    expect(lotto.compareWinningNumbersCount([10, 11, 12, 13, 14, 15])).toBe(0);
  });

  test('결과 가져오기 ', () => {
    expect(lotto.getWinningResult([1, 2, 3, 10, 11, 12], 7)).toBe('5,000원');
    expect(lotto.getWinningResult([1, 2, 3, 4, 10, 11], 7)).toBe('50,000원');
    expect(lotto.getWinningResult([1, 2, 3, 4, 5, 10], 7)).toBe('1,500,000원');
    expect(lotto.getWinningResult([1, 2, 3, 4, 5, 10], 6)).toBe('30,000,000원');
    expect(lotto.getWinningResult([1, 2, 3, 4, 5, 6], 7)).toBe(
      '2,000,000,000원',
    );
    expect(lotto.getWinningResult([10, 11, 12, 13, 14, 15], 7)).toBe(0);
  });

  test('setWinningMoney returns correct winning money for different match counts', () => {
    expect(lotto.setWinningMoney(3, 7)).toBe('5,000원');
    expect(lotto.setWinningMoney(4, 7)).toBe('50,000원');
    expect(lotto.setWinningMoney(5, 7)).toBe('1,500,000원');
    expect(lotto.setWinningMoney(5, 6)).toBe('30,000,000원');
    expect(lotto.setWinningMoney(6, 7)).toBe('2,000,000,000원');
    expect(lotto.setWinningMoney(2, 7)).toBe(0);
  });
});
