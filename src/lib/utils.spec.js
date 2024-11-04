import {
  calculateRate,
  getIsAllItemsBetweenNumbers,
  getIsAllItemsNumeric,
  getIsAllItemsUnique,
  getIsArrayLengthMatch,
  getIsBetweenNumbers,
  getIsNumeric,
  getIsPositive,
  getIsThousandUnit,
  intersection,
} from './utils';

describe('유틸 함수', () => {
  describe('intersection', () => {
    test('두 배열에 곂치는 요소가 있다면 요소를 담은 배열을 반환한다.', () => {
      expect(intersection([1, 2, 3], [1, 2, 4])).toStrictEqual([1, 2]);
    });
    test('두 배열에 곂치는 요소가 없다면 빈 배열을 반환한다.', () => {
      expect(intersection([], [])).toStrictEqual([]);
      expect(intersection([1, 2, 3], [4, 5, 6])).toStrictEqual([]);
    });
  });
  describe('getIsNumeric', () => {
    test('숫자라면 true를 반환한다.', () => {
      expect(getIsNumeric(1)).toBeTruthy();
      expect(getIsNumeric('1')).toBeTruthy();
    });
    test('숫자가 아니라면 false를 반환한다.', () => {
      expect(getIsNumeric('a')).toBeFalsy();
      expect(getIsNumeric('\\')).toBeFalsy();
    });
  });
  describe('getIsThousandUnit', () => {
    test('1000의 단위라면 true를 반환한다.', () => {
      expect(getIsThousandUnit(1000)).toBeTruthy();
      expect(getIsThousandUnit(-1000)).toBeTruthy();
    });
    test('1000의 단위가 아니라면 false를 반환한다.', () => {
      expect(getIsThousandUnit(1001)).toBeFalsy();
      expect(getIsThousandUnit(-1001)).toBeFalsy();
    });
  });
  describe('getIsPositive', () => {
    test('양수라면 true를 반환한다.', () => {
      expect(getIsPositive(5)).toBeTruthy();
    });
    test('양수가 아니라면 false를 반환한다.', () => {
      expect(getIsPositive(-1)).toBeFalsy();
      expect(getIsPositive(0)).toBeFalsy();
    });
  });
  describe('getIsArrayLengthMatch', () => {
    test('배열의 길이가 일치한다면 true를 반환한다.', () => {
      expect(getIsArrayLengthMatch([1, 2, 3], 3)).toBeTruthy();
      expect(getIsArrayLengthMatch([], 0)).toBeTruthy();
    });
    test('배열의 길이가 일치하지 않다면 false를 반환한다.', () => {
      expect(getIsArrayLengthMatch([1, 2, 3], 0)).toBeFalsy();
      expect(getIsArrayLengthMatch([], 3)).toBeFalsy();
    });
  });
  describe('getIsAllItemsNumeric', () => {
    test('배열의 모든 값이 숫자라면 true를 반환한다.', () => {
      expect(getIsAllItemsNumeric([1, 2, 3])).toBeTruthy();
      expect(getIsAllItemsNumeric([])).toBeTruthy();
    });
    test('배열의 하나 이상의 값이 숫자가 아니라면 false를 반환한다.', () => {
      expect(getIsAllItemsNumeric([1, 2, 'a'])).toBeFalsy();
      expect(getIsAllItemsNumeric(['a'])).toBeFalsy();
    });
  });
  describe('getIsBetweenNumbers', () => {
    test('min과 max사이의 값이라면 true를 반환한다.', () => {
      expect(getIsBetweenNumbers(5, 0, 10)).toBeTruthy();
      expect(getIsBetweenNumbers(0, 0, 10)).toBeTruthy();
    });
    test('min과 max사이의 값이 아니라면 false를 반환한다.', () => {
      expect(getIsBetweenNumbers(-1, 0, 1)).toBeFalsy();
    });
  });
  describe('getIsAllItemsBetweenNumbers', () => {
    test('모든 값이 min과 max사이의 값이라면 true를 반환한다.', () => {
      expect(getIsAllItemsBetweenNumbers([1, 2, 3], 0, 10)).toBeTruthy();
    });
    test('하나의 값이라도 min과 max사이의 값이 아니라면 false를 반환한다.', () => {
      expect(getIsAllItemsBetweenNumbers([1, 2, -1], 0, 10)).toBeFalsy();
    });
  });
  describe('getIsAllItemsUnique', () => {
    test('중복되는 값이 없다면 true를 반환한다.', () => {
      expect(getIsAllItemsUnique([1, 2, 3, 4, 5])).toBeTruthy();
      expect(getIsAllItemsUnique([])).toBeTruthy();
      expect(getIsAllItemsUnique(['a', 'b', 'c'])).toBeTruthy();
    });
    test('중복되는 값이 하나 이상 있다면 false를 반환한다.', () => {
      expect(getIsAllItemsUnique([1, 1])).toBeFalsy();
      expect(getIsAllItemsUnique(['a', 'a'])).toBeFalsy();
    });
  });
  describe('calculateRate', () => {
    test('part를 total로 나누고 100을 곱한 비율을 반환한다.', () => {
      expect(calculateRate(1000, 5000)).toBe(20);
      expect(calculateRate(0, 5000)).toBe(0);
      expect(calculateRate(25, 10000)).toBe(0.25);
      expect(calculateRate(1, 5000)).toBe(0.02);
    });
  });
});
