import { ERROR_MESSAGE } from '../src/lib/constants';
import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  describe('예외 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가는 경우 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(ERROR_MESSAGE.NOT_SIX);
    });

    test('로또 번호에 중복된 숫자가 있는 경우 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR_MESSAGE.NOT_UNIQUE);
    });
  });

  describe('정상적으로 로또가 생성된 경우', () => {
    const lotto = new Lotto([4, 2, 3, 6, 1, 5]);

    test('로또 번호가 오름차순으로 정렬된다.', () => {
      expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('로또 번호가 0개에서 2개 사이 당첨 될 경우 0를 반환한다.', () => {
      expect(lotto.checkWinning([11, 12, 13, 14, 15, 16], 20)).toBe(0);
      expect(lotto.checkWinning([1, 11, 12, 13, 14, 15], 20)).toBe(0);
      expect(lotto.checkWinning([1, 2, 11, 12, 13, 14], 20)).toBe(0);
    });
    test('로또 번호가 3개 당첨 될 경우 5를 반환한다.', () => {
      expect(lotto.checkWinning([1, 2, 3, 11, 12, 13], 20)).toBe(5);
    });
    test('로또 번호가 4개 당첨 될 경우 4를 반환한다.', () => {
      expect(lotto.checkWinning([1, 2, 3, 4, 11, 12], 20)).toBe(4);
    });
    test('로또 번호가 5개 당첨 될 경우 3를 반환한다.', () => {
      expect(lotto.checkWinning([1, 2, 3, 4, 5, 11], 20)).toBe(3);
    });
    test('로또 번호가 5개 당첨 되고 보너스 번호까지 당첨될 경우 2를 반환한다.', () => {
      expect(lotto.checkWinning([1, 2, 3, 4, 5, 11], 6)).toBe(2);
    });
    test('로또 번호가 6개 당첨 될 경우 1를 반환한다.', () => {
      expect(lotto.checkWinning([1, 2, 3, 4, 5, 6], 20)).toBe(1);
    });
  });
});
