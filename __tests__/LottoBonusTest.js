import LottoBonus from '../src/LottoBonus.js';
import { ERROR_MESSAGE } from '../src/constants/error.js';
import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from '../src/constants/lotto.js';

describe('LottoBonus 클래스 테스트', () => {
  const validWinningNumbers = [1, 2, 3, 4, 5, 6];
  
  describe('생성자 테스트', () => {
    test('유효한 보너스 번호로 인스턴스를 생성할 수 있다', () => {
      const bonusNumber = 7;
      const lottoBonus = new LottoBonus(bonusNumber, validWinningNumbers);
      
      expect(lottoBonus.getNumber()).toBe(bonusNumber);
    });
  });

  describe('유효성 검사 테스트', () => {
    test('숫자가 아닌 보너스 번호로 생성시 에러가 발생한다', () => {
      const invalidBonusNumber = 'abc';
      
      expect(() => {
        new LottoBonus(invalidBonusNumber, validWinningNumbers);
      }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_BONUS_NUMBER);
    });

    test(`${LOTTO_MIN_NUMBER}보다 작은 보너스 번호로 생성시 에러가 발생한다`, () => {
      const invalidBonusNumber = LOTTO_MIN_NUMBER - 1;
      
      expect(() => {
        new LottoBonus(invalidBonusNumber, validWinningNumbers);
      }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_BONUS_RANGE);
    });

    test(`${LOTTO_MAX_NUMBER}보다 큰 보너스 번호로 생성시 에러가 발생한다`, () => {
      const invalidBonusNumber = LOTTO_MAX_NUMBER + 1;
      
      expect(() => {
        new LottoBonus(invalidBonusNumber, validWinningNumbers);
      }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_BONUS_RANGE);
    });

    test('당첨 번호와 중복된 보너스 번호로 생성시 에러가 발생한다', () => {
      const duplicatedBonusNumber = validWinningNumbers[0];
      
      expect(() => {
        new LottoBonus(duplicatedBonusNumber, validWinningNumbers);
      }).toThrow(ERROR_MESSAGE.DUPLICATED_LOTTO_BONUS_NUMBER);
    });
  });

  describe('경계값 테스트', () => {
    test(`최소값(${LOTTO_MIN_NUMBER})으로 보너스 번호를 생성할 수 있다`, () => {
      const minBonusNumber = LOTTO_MIN_NUMBER;
      const lottoBonus = new LottoBonus(minBonusNumber, [2, 3, 4, 5, 6, 7]);
      
      expect(lottoBonus.getNumber()).toBe(minBonusNumber);
    });

    test(`최대값(${LOTTO_MAX_NUMBER})으로 보너스 번호를 생성할 수 있다`, () => {
      const maxBonusNumber = LOTTO_MAX_NUMBER;
      const lottoBonus = new LottoBonus(maxBonusNumber, [1, 2, 3, 4, 5, 6]);
      
      expect(lottoBonus.getNumber()).toBe(maxBonusNumber);
    });
  });
});