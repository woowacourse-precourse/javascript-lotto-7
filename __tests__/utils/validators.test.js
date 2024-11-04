import {
  isNumbersInArray,
  isNumber,
  isNumberInRange,
} from '../../src/utils/validators.js';
import { throwError } from '../../src/utils/throwError.js';
import { WINNING_NUMBER_DELIMITER } from '../../src/constants.js';

jest.mock('../../src/utils/throwError.js');

describe('validators', () => {
  describe('isNumbersInArray', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('모든 값이 숫자인 경우 true를 반환한다.', () => {
      const input = `1${WINNING_NUMBER_DELIMITER}2${WINNING_NUMBER_DELIMITER}3`;
      expect(isNumbersInArray(input)).toBe(true);
    });

    test('숫자가 아닌 값이 포함된 경우 false를 반환한다.', () => {
      const input = `1${WINNING_NUMBER_DELIMITER}a${WINNING_NUMBER_DELIMITER}3`;
      expect(isNumbersInArray(input)).toBe(false);
    });

    test('숫자가 아닌 값이 포함되고 throwOnError가 true일 때 에러를 발생시킨다.', () => {
      const input = `1${WINNING_NUMBER_DELIMITER}a${WINNING_NUMBER_DELIMITER}3`;
      isNumbersInArray(input, true);
      expect(throwError).toHaveBeenCalledWith('모든 값은 숫자여야 합니다.');
    });
  });

  describe('isNumber', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('입력이 숫자인 경우 true를 반환한다.', () => {
      expect(isNumber('123')).toBe(true);
      expect(isNumber('0')).toBe(true);
      expect(isNumber('-45')).toBe(true);
    });

    test('입력이 숫자가 아닌 경우 false를 반환한다.', () => {
      expect(isNumber('abc')).toBe(false);
      expect(isNumber('12a')).toBe(false);
    });

    test('입력이 숫자가 아닌 경우 throwOnError가 true일 때 에러를 발생시킨다.', () => {
      isNumber('abc', true);
      expect(throwError).toHaveBeenCalledWith('숫자만 입력할 수 있습니다.');
    });
  });

  describe('isNumberInRange', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('입력이 범위 내의 숫자인 경우 true를 반환한다.', () => {
      expect(isNumberInRange('5', 1, 10)).toBe(true);
      expect(isNumberInRange('10', 1, 10)).toBe(true);
      expect(isNumberInRange('1', 1, 10)).toBe(true);
    });

    test('입력이 범위 외의 숫자인 경우 false를 반환한다.', () => {
      expect(isNumberInRange('0', 1, 10)).toBe(false);
      expect(isNumberInRange('11', 1, 10)).toBe(false);
    });

    test('입력이 숫자가 아닌 경우 false를 반환한다.', () => {
      expect(isNumberInRange('abc', 1, 10)).toBe(false);
    });

    test('입력이 범위 외의 숫자이고 throwOnError가 true일 때 에러를 발생시킨다.', () => {
      isNumberInRange('11', 1, 10, true);
      expect(throwError).toHaveBeenCalledWith(
        '1부터 10 사이의 숫자여야 합니다.'
      );
    });

    test('입력이 숫자가 아니고 throwOnError가 true일 때 에러를 발생시킨다.', () => {
      isNumberInRange('abc', 1, 10, true);
      expect(throwError).toHaveBeenCalledWith(
        '1부터 10 사이의 숫자여야 합니다.'
      );
    });
  });
});
