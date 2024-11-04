import Lotto from '../src/models/Lotto';
import { ERROR_MESSAGES } from '../src/constants/errorMessage';
import { LOTTO_CONFIG } from '../src/constants/lottoConfig';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

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

  describe('generate 메서드', () => {
    test('로또 번호가 올바른 범위와 갯수로 생성되는지 테스트', () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
      const lotto = Lotto.generate();

      expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
      expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(
        LOTTO_CONFIG.NUMBER_MIN,
        LOTTO_CONFIG.NUMBER_MAX,
        LOTTO_CONFIG.NUMBER_COUNT
      );
    });
  });

  describe('generateMultiple 메서드', () => {
    test('여러 개의 로또 번호가 올바르게 생성되는지 테스트', () => {
      Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
      const lottos = Lotto.generateMultiple(3);
      expect(lottos).toHaveLength(3);
      lottos.forEach((lotto) => {
        expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
      });
    });
  });

  describe('calculateRank 메서드', () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    test('1등 당첨 여부를 계산하는지 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.calculateRank(winningLotto, bonusNumber)).toBe('first');
    });

    test('2등 당첨 여부를 계산하는지 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      expect(lotto.calculateRank(winningLotto, bonusNumber)).toBe('second');
    });

    test('3등 당첨 여부를 계산하는지 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
      expect(lotto.calculateRank(winningLotto, bonusNumber)).toBe('third');
    });

    test('4등 당첨 여부를 계산하는지 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 4, 8, 9]);
      expect(lotto.calculateRank(winningLotto, bonusNumber)).toBe('fourth');
    });

    test('5등 당첨 여부를 계산하는지 테스트', () => {
      const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
      expect(lotto.calculateRank(winningLotto, bonusNumber)).toBe('fifth');
    });

    test('낙첨 여부를 계산하는지 테스트', () => {
      const lotto = new Lotto([8, 9, 10, 11, 12, 13]);
      expect(lotto.calculateRank(winningLotto, bonusNumber)).toBeUndefined();
    });
  });
});
