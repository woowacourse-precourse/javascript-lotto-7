import {
  isDivisibleByNumber,
  isIntegerNumericString,
  isNotEmptyString,
  isNumericString,
  isPositiveNumericString,
  sortNumbersAscendingOrder,
} from '../src/lib/utils.js';

describe('utils', () => {
  describe('isNotEmptyString', () => {
    it('빈 문자열이 아닌 경우 true를 반환해야한다', () => {
      const value = 'woowacourse';

      const result = isNotEmptyString(value);

      expect(result).toBe(true);
    });

    it('빈 문자열인 경우 false를 반환해야한다', () => {
      const value = '';

      const result = isNotEmptyString(value);

      expect(result).toBe(false);
    });
  });

  describe('isDivisibleByNumber', () => {
    it('주어진 숫자로 나누어 나머지가 0인 경우 true를 반환해야한다', () => {
      const [value, number] = [15000, 1000];

      const result = isDivisibleByNumber(value, number);

      expect(result).toBe(true);
    });

    it('주어진 숫자로 나누어 나머지가 0이 아닌 경우 false를 반환해야한다', () => {
      const [value, number] = [15050, 1000];

      const result = isDivisibleByNumber(value, number);

      expect(result).toBe(false);
    });
  });

  describe('isNumericString', () => {
    it('문자열을 숫자로 변환 가능한 경우 true를 반환해야한다', () => {
      const value = '123';

      const result = isNumericString(value);

      expect(result).toBe(true);
    });

    it('문자열을 숫자로 변환 불가한 경우 false를 반환해야한다', () => {
      const value = 'woowacourse';

      const result = isNumericString(value);

      expect(result).toBe(false);
    });
  });

  describe('isPositiveNumericString', () => {
    it('주어진 문자열이 양수인 경우 true를 반환해야한다.', () => {
      const value = '123';

      const result = isPositiveNumericString(value);

      expect(result).toBe(true);
    });

    it('주어진 문자열이 양수가 아닌 경우 false를 반환해야한다.', () => {
      const value = 'woowacourse';

      const result = isPositiveNumericString(value);

      expect(result).toBe(false);
    });
  });

  describe('isIntegerNumericString', () => {
    it('주어진 문자열이 정수인 경우 true를 반환해야한다', () => {
      const value = '123';

      const result = isIntegerNumericString(value);

      expect(result).toBe(true);
    });

    it('주어진 문자열이 정수가 아닌 경우 false를 반환해야한다', () => {
      const value = '123.123';

      const result = isIntegerNumericString(value);

      expect(result).toBe(false);
    });
  });

  describe('sortNumbersAscendingOrder', () => {
    it('주어진 숫자 배열을 오름차순 정렬된 새로운 배열로 만들어 반환해야한다', () => {
      const values = [5, 10, 3, 55, 2];

      const result = sortNumbersAscendingOrder(values);

      expect(result).toEqual([2, 3, 5, 10, 55]);
    });
  });
});
