import { CONFIG } from '../../src/constants/constants.js';
import {
  isValidPurchaseUnit,
  isPositiveNumber,
  isValidLength,
  isUnique,
  isValidInRange,
} from '../../src/util/validationUtils.js';

describe('validationUtils 테스트', () => {
  describe('isValidPurchaseUnit', () => {
    test('amount가 unit으로 나누어 떨어지면 true를 반환한다', () => {
      expect(isValidPurchaseUnit(5000, CONFIG.PURCHASE_AMOUNT_UNIT)).toBe(true);
    });

    test('amount가 unit으로 나누어 떨어지지 않으면 false를 반환한다', () => {
      expect(isValidPurchaseUnit(1001, CONFIG.PURCHASE_AMOUNT_UNIT)).toBe(
        false
      );
    });
  });

  describe('isPositiveNumber', () => {
    test('양수일 경우 true를 반환한다', () => {
      expect(isPositiveNumber(1)).toBe(true);
    });

    test('음수일 경우 false를 반환한다', () => {
      expect(isPositiveNumber(-1)).toBe(false);
    });

    test('0일 경우 false를 반환한다', () => {
      expect(isPositiveNumber(0)).toBe(false);
    });

    test('숫자가 아닐 경우 false를 반환한다', () => {
      expect(isPositiveNumber('lotto')).toBe(false);
    });
  });

  describe('isValidLength', () => {
    test('배열의 길이가 count와 일치하면 true를 반환한다', () => {
      expect(isValidLength([1, 2, 3], 3)).toBe(true);
    });

    test('배열의 길이가 count와 일치하지 않으면 false를 반환한다', () => {
      expect(isValidLength([1, 2, 3], 4)).toBe(false);
    });
  });

  describe('isUnique', () => {
    test('배열 내의 값이 유일할 경우 true를 반환한다', () => {
      expect(isUnique([1, 2, 3])).toBe(true);
    });

    test('배열 내에 중복된 값이 있을 경우 false를 반환한다', () => {
      expect(isUnique([1, 2, 2])).toBe(false);
    });

    test('단일 값이 비교 배열에 존재하지 않으면 true를 반환한다', () => {
      expect(isUnique(5, [1, 2, 3])).toBe(true);
    });

    test('단일 값이 비교 배열에 존재하면 false를 반환한다', () => {
      expect(isUnique(2, [1, 2, 3])).toBe(false);
    });
  });

  describe('isValidInRange', () => {
    test('배열의 모든 요소가 범위 내에 있으면 true를 반환한다', () => {
      expect(isValidInRange([1, 2, 3], 1, 45)).toBe(true);
    });

    test('배열에 범위를 벗어나는 요소가 있으면 false를 반환한다', () => {
      expect(isValidInRange([1, 2, 46], 1, 45)).toBe(false);
    });

    test('단일 값이 범위 내에 있으면 true를 반환한다', () => {
      expect(isValidInRange(5, 1, 45)).toBe(true);
    });

    test('단일 값이 범위를 벗어나면 false를 반환한다', () => {
      expect(isValidInRange(46, 1, 45)).toBe(false);
    });
  });
});
