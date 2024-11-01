import {
  calculateRateOfReturn,
  generateMapWithZeroValue,
  getIsAllItemsBetweenNumbers,
  getIsAllItemsNumeric,
  getIsAllItemsUnique,
  getIsArrayLengthMatch,
  getIsBetweenNumbers,
  getIsNumeric,
  getIsPositive,
  getIsThousandUnit,
  intersection,
} from '../src/lib/utils';

describe('유틸 함수', () => {
  describe('intersection', () => {
    test('두 배열에 곂치는 요소가 있다면 요소를 담은 배열을 반환한다.', () => {
      expect(intersection([1, 2, 3], [1, 2, 4])).toEqual([1, 2]);
    });
    test('두 배열에 곂치는 요소가 없다면 빈 배열을 반환한다.', () => {
      expect(intersection([], [])).toEqual([]);
      expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });
  });
  describe('getIsNumeric', () => {
    test('숫자라면 true를 반환한다.', () => {
      expect(getIsNumeric(1)).toBe(true);
      expect(getIsNumeric('1')).toBe(true);
    });
    test('숫자가 아니라면 false를 반환한다.', () => {
      expect(getIsNumeric('a')).toBe(false);
      expect(getIsNumeric('\\')).toBe(false);
    });
  });
  describe('getIsThousandUnit', () => {
    test('1000의 단위라면 true를 반환한다.', () => {
      expect(getIsThousandUnit(1000)).toBe(true);
      expect(getIsThousandUnit(-1000)).toBe(true);
    });
    test('1000의 단위가 아니라면 false를 반환한다.', () => {
      expect(getIsThousandUnit(1001)).toBe(false);
      expect(getIsThousandUnit(-1001)).toBe(false);
    });
  });
  describe('getIsPositive', () => {
    test('양수라면 true를 반환한다.', () => {
      expect(getIsPositive(5)).toBe(true);
    });
    test('양수가 아니라면 false를 반환한다.', () => {
      expect(getIsPositive(-1)).toBe(false);
      expect(getIsPositive(0)).toBe(false);
    });
  });
  describe('getIsArrayLengthMatch', () => {
    test('배열의 길이가 일치한다면 true를 반환한다.', () => {
      expect(getIsArrayLengthMatch([1, 2, 3], 3)).toBe(true);
      expect(getIsArrayLengthMatch([], 0)).toBe(true);
    });
    test('배열의 길이가 일치하지 않다면 false를 반환한다.', () => {
      expect(getIsArrayLengthMatch([1, 2, 3], 0)).toBe(false);
      expect(getIsArrayLengthMatch([], 3)).toBe(false);
    });
  });
  describe('getIsAllItemsNumeric', () => {
    test('배열의 모든 값이 숫자라면 true를 반환한다.', () => {
      expect(getIsAllItemsNumeric([1, 2, 3])).toBe(true);
      expect(getIsAllItemsNumeric([])).toBe(true);
    });
    test('배열의 하나 이상의 값이 숫자가 아니라면 false를 반환한다.', () => {
      expect(getIsAllItemsNumeric([1, 2, 'a'])).toBe(false);
      expect(getIsAllItemsNumeric(['a'])).toBe(false);
    });
  });
  describe('getIsBetweenNumbers', () => {
    test('min과 max사이의 값이라면 true를 반환한다.', () => {
      expect(getIsBetweenNumbers(5, 0, 10)).toBe(true);
      expect(getIsBetweenNumbers(0, 0, 10)).toBe(true);
    });
    test('min과 max사이의 값이 아니라면 false를 반환한다.', () => {
      expect(getIsBetweenNumbers(-1, 0, 1)).toBe(false);
    });
  });
  describe('getIsAllItemsBetweenNumbers', () => {
    test('모든 값이 min과 max사이의 값이라면 true를 반환한다.', () => {
      expect(getIsAllItemsBetweenNumbers([1, 2, 3], 0, 10)).toBe(true);
    });
    test('하나의 값이라도 min과 max사이의 값이 아니라면 false를 반환한다.', () => {
      expect(getIsAllItemsBetweenNumbers([1, 2, -1], 0, 10)).toBe(false);
    });
  });
  describe('getIsAllItemsUnique', () => {
    test('중복되는 값이 없다면 true를 반환한다.', () => {
      expect(getIsAllItemsUnique([1, 2, 3, 4, 5])).toBe(true);
      expect(getIsAllItemsUnique([])).toBe(true);
    });
    test('중복되는 값이 하나 이상 있다면 false를 반환한다.', () => {
      expect(getIsAllItemsUnique([1, 1])).toBe(false);
    });
  });
  describe('calculateRateOfReturn', () => {
    test('수익률을 반환한다.', () => {
      expect(calculateRateOfReturn(1000, 5000)).toBe(20);
    });
  });
  describe('generateMapWithZeroValue', () => {
    test('주어진 인자의 값을 key로, 0을 value로 가진 Map을 반환한다.', () => {
      expect(generateMapWithZeroValue([1, 2, 3, 4, 5])).toEqual(
        new Map([
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
        ]),
      );
    });
  });
});
