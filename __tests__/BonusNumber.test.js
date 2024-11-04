// __tests__/BonusNumber.test.js

import errorConstants from '../src/constants/error-constants.js';
import BonusNumber from '../src/lotto/BonusNumber.js';

describe('BonusNumber 클래스 테스트', () => {
  describe('유효한 보너스 번호 입력 시', () => {
    test('BonusNumber 객체가 정상적으로 생성되고, 보너스 번호를 반환한다', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const bonusInput = 7;
      const bonusNumber = new BonusNumber(bonusInput, lottoNumbers);

      expect(bonusNumber).toBeInstanceOf(BonusNumber);
      expect(bonusNumber.getBonusNumber()).toBe(bonusInput);
    });
  });

  describe('보너스 번호가 기존 로또 번호와 겹칠 때', () => {
    test('에러를 발생시킨다', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const duplicateBonusInput = 6;

      expect(() => {
        new BonusNumber(duplicateBonusInput, lottoNumbers);
      }).toThrow(errorConstants.DUPLICATED_NUMBER);
    });
  });

  describe('보너스 번호가 숫자가 아닐 때', () => {
    test('에러를 발생시킨다', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const invalidBonusInput = 'a'; // 숫자가 아님

      expect(() => {
        new BonusNumber(invalidBonusInput, lottoNumbers);
      }).toThrow(errorConstants.NOT_A_NUMBER);
    });
  });

  describe('보너스 번호가 0일 때', () => {
    test('에러를 발생시킨다', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const zeroBonusInput = 0; // 0 입력

      expect(() => {
        new BonusNumber(zeroBonusInput, lottoNumbers);
      }).toThrow(errorConstants.NOT_ZERO);
    });
  });

  describe('보너스 번호가 범위를 벗어났을 때', () => {
    test('에러를 발생시킨다', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const outOfRangeBonusInput = 46; // 예: 로또 번호 범위 1-45

      expect(() => {
        new BonusNumber(outOfRangeBonusInput, lottoNumbers);
      }).toThrow(errorConstants.NOT_IN_RANGE);
    });
  });

  describe('보너스 번호가 비어있을 때', () => {
    test('에러를 발생시킨다', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const emptyBonusInput = ''; // 빈 문자열

      expect(() => {
        new BonusNumber(emptyBonusInput, lottoNumbers);
      }).toThrow(errorConstants.NOT_EMPTY);
    });
  });
});
