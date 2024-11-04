import Lotto from '../../src/models/Lotto';
import { ERROR_MESSAGES } from '../../src/constants/errorMessage';

describe('Lotto 클래스 테스트', () => {
  describe('생성자 및 유효성 검사', () => {
    test('로또 번호가 유효하지 않으면 오류를 발생시키는지 테스트', () => {
      expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
        ERROR_MESSAGES.INVALID_LOTTO_COUNT
      );
      expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(
        ERROR_MESSAGES.OUT_OF_RANGE
      );
      expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
        ERROR_MESSAGES.DUPLICATE_NUMBER
      );
    });

    test('로또 번호가 유효한 경우 객체가 정상적으로 생성되는지 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
