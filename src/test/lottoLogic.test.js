import Lotto from '../Lotto/Lotto.js';
import Validator from '../utils/Validator.js';
import ERROR_MESSAGES from '../consts/ErrorMessage.js';

describe('로또 클래스 테스트', () => {
  let lotto;

  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test('compareWinningNumbersCount 함수 테스트', () => {
    expect(lotto.compareWinningNumbersCount([1, 2, 3, 10, 11, 12])).toBe(3);
    expect(lotto.compareWinningNumbersCount([1, 2, 3, 4, 5, 6])).toBe(6);
    expect(lotto.compareWinningNumbersCount([10, 11, 12, 13, 14, 15])).toBe(0);
  });

  test('getWinningResult 함수 테스트', () => {
    expect(lotto.getWinningResult([1, 2, 3, 10, 11, 12], 7)).toBe(5); // 3개 일치
    expect(lotto.getWinningResult([1, 2, 3, 4, 10, 11], 7)).toBe(4); // 4개 일치
    expect(lotto.getWinningResult([1, 2, 3, 4, 5, 10], 7)).toBe(3); // 5개 일치
    expect(lotto.getWinningResult([1, 2, 3, 4, 5, 10], 6)).toBe(2); // 5개 일치 + 보너스
    expect(lotto.getWinningResult([1, 2, 3, 4, 5, 6], 7)).toBe(1); // 6개 일치
    expect(lotto.getWinningResult([10, 11, 12, 13, 14, 15], 7)).toBe(0); // 불일치
  });

  test('setWinningRank 함수 테스트', () => {
    expect(lotto.setWinningRank(3, 7)).toBe(5); // 3개 일치
    expect(lotto.setWinningRank(4, 7)).toBe(4); // 4개 일치
    expect(lotto.setWinningRank(5, 7)).toBe(3); // 5개 일치
    expect(lotto.setWinningRank(5, 6)).toBe(2); // 5개 일치 + 보너스 번호
    expect(lotto.setWinningRank(6, 7)).toBe(1); // 6개 일치
    expect(lotto.setWinningRank(2, 7)).toBe(0); // 2개 이하 일치
  });
  test('문제 없는 케이스', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test('유효성 검사 실패 시 예외 발생', () => {
    Validator.validateLotto = jest.fn(() => {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE);
    });
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE,
    );
  });
});
